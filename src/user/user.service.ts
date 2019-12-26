import { HttpException, Injectable, OnModuleInit } from '@nestjs/common';
import { User } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import config from '../../global.config';
import * as request from 'request-promise';
import * as moment from 'moment';
import { CryptoUtil } from '../common/utils/crypto.util';

@Injectable()
export class UserService implements OnModuleInit {
  async onModuleInit() {
    if (await this.findOneByAccount('admin')) {
      return;
    }
    // 初始化系统管理员
    const admin = this.userRepository.create({
      account: 'admin',
      password: this.cryptoUtil.encryptPassword('i_am_admin_!'),
      name: '系统管理员',
      role: 'admin',
      avatarUrl: '',
      createdAt: moment().unix(),
      updatedAt: moment().unix(),
    });
    await this.userRepository.save(admin);
  }

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly cryptoUtil: CryptoUtil,
  ) {}

  public async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  public async register(createUserData: any): Promise<User> {
    const user = await this.findOneByAccount(createUserData.account);
    if (user) {
      throw new HttpException('账号已存在', 409);
    }
    const assign = {
      ...createUserData,
      name: '系统管理员',
      role: 'admin',
      avatarUrl: '',
      createdAt: moment().unix(),
      updatedAt: moment().unix(),
      password: this.cryptoUtil.encryptPassword(createUserData.password),
    };
    return await this.userRepository.save(assign);
  }

  /**
   * 用户登录
   * @param account 登录账号
   * @param password 登录密码
   */
  public async login(account: string, password: string): Promise<User> {
    const user = await this.findOneByAccount(account);
    if (!user) {
      throw new HttpException('登录账号有误', 406);
    }
    if (!this.cryptoUtil.checkPassword(password, user.password)) {
      throw new HttpException('登录密码有误', 409);
    }
    return user;
  }

  /**
   * 删除用户
   * @param id 用户ID
   */
  public async remove(id: number): Promise<void> {
    const existing = await this.userRepository.findOne(id);
    if (!existing) {
      throw new HttpException(`删除失败，ID 为 '${id}' 的用户不存在`, 404);
    }
    await this.userRepository.remove(existing);
  }

  /**
   * 更新用户
   * @param id 用户ID
   * @param updateInput updateInput
   */
  public async update(id: number, updateInput: User) {
    const existing = await this.userRepository.findOne(id);
    if (!existing) {
      throw new HttpException(`更新失败，ID 为 '${id}' 的用户不存在`, 404);
    }
    if (updateInput.account) {
      existing.account = updateInput.account;
    }
    if (updateInput.password) {
      existing.password = this.cryptoUtil.encryptPassword(updateInput.password);
    }
    if (updateInput.name) {
      existing.name = updateInput.name;
    }
    return await this.userRepository.save(existing);
  }

  /**
   * 通过登录账号查询用户
   * @param account 登录账号
   */
  public async findOneByAccount(account: string): Promise<User> {
    return await this.userRepository.findOne({ account });
  }

  /**
   * 查询用户及其帖子的信息
   * @param id 用户ID
   */
  public async findOneWithPostsById(id: number): Promise<User> {
    return await this.userRepository.findOne(id, { relations: ['posts'] });
  }

  public async validateUser(name: string): Promise<any> {
    return await this.userRepository.findOne({ name });
  }

  public async assessToken(queryData: { code: string }): Promise<any> {
    const ClientID = config.githubID;
    const ClientSecret = config.githubSecret;
    const options = {
      method: 'post',
      uri:
        'http://github.com/login/oauth/access_token?' +
        `client_id=${ClientID}&` +
        `client_secret=${ClientSecret}&` +
        `code=${queryData.code}`,
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
    };
    const result: string = (await asyncRequest(options)) as string;
    return JSON.parse(result);
  }

  public async getGithubUserInfo(parseResult: any): Promise<any> {
    const githubConfig = {
      method: 'get',
      uri: `https://api.github.com/user`,
      headers: {
        Authorization: `token ${parseResult.access_token}`,
        'User-Agent': 'easterCat',
      },
    };
    const user: string = (await asyncRequest(githubConfig)) as string;
    return JSON.parse(user);
  }
}

function asyncRequest(options: any) {
  return new Promise((resolve, reject) => {
    request(options)
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
}

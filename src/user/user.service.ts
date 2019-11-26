import { Injectable } from '@nestjs/common';
import { User } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as jwt from 'jsonwebtoken';
import { config } from '../../global.config';
import * as request from 'request-promise';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  public async create(createUserData: any): Promise<User> {
    return await this.userRepository.save(createUserData);
  }

  public async createToken(name: string): Promise<any> {
    const user: { name: string } = { name };
    return jwt.sign(user, 'secretKey', { expiresIn: 3600 });
  }

  public async findOneByName(name: string): Promise<User> {
    return await this.userRepository.findOne({ name });
  }

  public async validateUser(name: string): Promise<any> {
    return await this.userRepository.findOne({ name });
  }

  public async login(name: string): Promise<any> {
    const user: any = await this.findOneByName(name);
    if (user !== undefined) {
      return this.createToken(user.name);
    } else {
      return 'login failed !';
    }
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

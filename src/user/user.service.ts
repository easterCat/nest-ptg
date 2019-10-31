import { Injectable } from '@nestjs/common';
import { User } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserData: any): Promise<User> {
    return await this.userRepository.save(createUserData);
  }

  async createToken(name: string): Promise<any> {
    const user: { name: string } = { name };
    return jwt.sign(user, 'secretKey', { expiresIn: 3600 });
  }

  async findOneByName(name: string): Promise<User> {
    return await this.userRepository.findOne({ name });
  }

  async validateUser(name: string): Promise<any> {
    return await this.userRepository.findOne({ name });
  }

  async login(name: string): Promise<any> {
    const user: any = await this.findOneByName(name);
    if (user !== undefined) {
      return this.createToken(user.name);
    } else {
      return 'login failed !';
    }
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Session } from './entity/session.entity';

@Injectable()
export class SessionService {
  constructor(
    @InjectRepository(Session)
    private readonly sessionRepository: Repository<Session>,
  ) {}

  public async create(createData: any): Promise<Session> {
    return await this.sessionRepository.save(createData);
  }

  public async find(query: {
    name?: string;
    token?: string;
  }): Promise<Session> {
    console.log(query);
    if (query.name && query.name !== '') {
      return await this.sessionRepository.findOne({ name: query.name });
    }
    if (query.token && query.token !== '') {
      return await this.sessionRepository.findOne({ token: query.token });
    }
  }
}

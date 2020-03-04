import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Session } from '../entity/session.entity';

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
    account?: string;
    token?: string;
  }): Promise<Session> {
    if (query.account && query.account !== '') {
      return await this.sessionRepository.findOne({ account: query.account });
    }
    if (query.token && query.token !== '') {
      return await this.sessionRepository.findOne({ token: query.token });
    }
  }
}

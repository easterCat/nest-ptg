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

  async create(createData: any): Promise<Session> {
    return await this.sessionRepository.save(createData);
  }

  async find(name: string): Promise<Session> {
    return await this.sessionRepository.findOne({ name });
  }
}

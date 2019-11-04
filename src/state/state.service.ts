import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { State } from './entity/state.entity';
import * as mo from 'moment';

@Injectable()
export class StateService {
  constructor(
    @InjectRepository(State)
    private readonly stateRepository: Repository<State>,
  ) {}

  public async create(body: any): Promise<State> {
    const createData = { ...body, createAt: mo().unix() };
    const result = await this.stateRepository.save(createData);
    result.createTime = mo(result.createAt).format('YYYY-MM-DD H:mm:ss');
    return result;
  }

  public async findAll(): Promise<any> {
    let result = await this.stateRepository.find({
      order: {
        id: 'DESC',
      },
    });
    result = result.map((item: any) => {
      item.createTime = mo
        .unix(item.createAt || 0)
        .format('YYYY-MM-DD H:mm:ss');
      return item;
    });
    return result;
  }

  public async removeById(id: number): Promise<any> {
    return await this.stateRepository.delete({ id });
  }

  public async find(time: string): Promise<any> {
    return await this.stateRepository.find({});
  }
}

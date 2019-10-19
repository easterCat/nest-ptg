import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Collect } from './collect.entity';

@Injectable()
export class CollectService {
  constructor(
    @InjectRepository(Collect)
    private readonly collectRepository: Repository<Collect>,
  ) {}
  async create(createData: any): Promise<Collect[]> {
    return await this.collectRepository.save(createData);
  }
  async remove(id: string): Promise<any> {
    return await this.collectRepository.delete(id);
  }
  async findAll(): Promise<Collect[]> {
    return await this.collectRepository.find();
  }
  async findById(id: number): Promise<Collect[]> {
    return await this.collectRepository.findByIds([id]);
  }
}

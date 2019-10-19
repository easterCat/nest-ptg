import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Write } from './write.entity';
@Injectable()
export class WriteService {
  constructor(
    @InjectRepository(Write)
    private readonly writeRepository: Repository<Write>,
  ) {}
  async create(createData: any): Promise<Write[]> {
    return await this.writeRepository.save(createData);
  }
  async remove(id: string): Promise<any> {
    return await this.writeRepository.delete(id);
  }
  async findAll(): Promise<Write[]> {
    return await this.writeRepository.find();
  }
  async findById(id: number): Promise<Write[]> {
    return await this.writeRepository.findByIds([id]);
  }
}

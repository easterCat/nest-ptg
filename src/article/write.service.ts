import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Write } from './entity/write.entity';
import { WriteDto } from './dto/write.dto';

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
  async update(updateData: WriteDto): Promise<any> {
    return await this.writeRepository.save(updateData);
  }
  async findAll(): Promise<Write[]> {
    return await this.writeRepository.find();
  }
  async findById(id: string | number): Promise<Write[]> {
    return await this.writeRepository.findByIds([id]);
  }
}

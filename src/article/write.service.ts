import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from './article.entity';
import { ArticleDto } from './dto/article.dto';

@Injectable()
export class WriteService {
  constructor(
    @InjectRepository(Article)
    private readonly writeRepository: Repository<Article>,
  ) {}
  async create(createData: any): Promise<Article[]> {
    return await this.writeRepository.save(createData);
  }
  async remove(id: string): Promise<any> {
    return await this.writeRepository.delete(id);
  }
  async update(updateData: ArticleDto): Promise<any> {
    return await this.writeRepository.save(updateData);
  }
  async findAll(): Promise<Article[]> {
    // this.writeRepository => 'manager', 'metadata', 'queryRunner'
    return await this.writeRepository.find();
  }
  async findById(id: string | number): Promise<Article[]> {
    return await this.writeRepository.findByIds([id]);
  }
  async query(querySql: string): Promise<Article[]> {
    return await this.writeRepository.query(querySql);
  }
}

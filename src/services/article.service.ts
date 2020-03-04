import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ArticleEntity } from '../entity/article.entity';
import { ArticleDto } from '../dto/article/article.dto';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(ArticleEntity)
    private readonly articleRepository: Repository<ArticleEntity>,
  ) {}

  public async create(createArticle: any): Promise<ArticleEntity> {
    // 使用find方法进行查询
    return await this.articleRepository.save({
      ...createArticle,
      tags: '',
      createTime: Date.now() + '',
      updateTime: Date.now() + '',
      savePath: '',
      description: '',
    });
  }
  public async remove(id: string): Promise<any> {
    return await this.articleRepository.delete(id);
  }
  public async update(updateData: ArticleDto): Promise<any> {
    return await this.articleRepository.save(updateData);
  }
  public async findAll(): Promise<ArticleEntity[]> {
    return await this.articleRepository.find();
  }
  public async findById(id: string | number): Promise<ArticleEntity[]> {
    return await this.articleRepository.findByIds([id]);
  }
  public async query(querySql: string): Promise<ArticleEntity[]> {
    return await this.articleRepository.query(querySql);
  }

  public async getArticleByCollectId(
    collectId: string,
  ): Promise<ArticleEntity[]> {
    return await this.articleRepository.find({
      where: {
        collectId,
      },
    });
  }
}

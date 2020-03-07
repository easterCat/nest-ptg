import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ArticleEntity } from '../entity/article.entity';
import { ArticleDto } from '../dto/article/article.dto';
import {
  readJSONSync,
  pathExistsSync,
  ensureFileSync,
  outputJsonSync,
} from 'fs-extra';
import { existsSync } from 'fs';

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
      authorId: '',
      authorName: '',
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
  public async findById(id: string | number): Promise<ArticleEntity> {
    let result = await this.articleRepository.findOne(id);

    if (!result) {
      throw new BadRequestException('获取数据失败,该文章数据为空');
    }

    if (result.savePath && result.savePath !== '') {
      const json = this.findAricleJson(result.savePath);

      result = {
        ...result,
        ...json,
      };

      return result;
    } else {
      throw new NotFoundException('文章不存在');
    }
  }

  public async findAricleJson(path: string) {
    if (existsSync(path)) {
      const json = readJSONSync(path);

      return {
        markdown: json.markdown,
        html: json.html,
      };
    } else {
      outputJsonSync(path, {});
      return {
        markdown: '',
        html: '',
      };
    }
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

import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import * as path from 'path';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ArticleEntity } from '../entity/article.entity';
import { ArticleDto } from '../dto/article/article.dto';
import { ensureDirSync, ensureFileSync, outputJsonSync, readJSONSync, writeJsonSync } from 'fs-extra';
import { existsSync } from 'fs';
import config from '../../global.config';

@Injectable()
export class ArticleService {
    constructor(
        @InjectRepository(ArticleEntity)
        private readonly articleRepository: Repository<ArticleEntity>,
    ) {}

    public async create(createArticle: any): Promise<ArticleEntity> {
        // 使用find方法进行查询
        const savePath = this.createArticle({
            collectName: createArticle.collectName,
            title: createArticle.title,
            markdown: '',
            html: '',
        });

        return await this.articleRepository.save({
            ...createArticle,
            savePath,
            tags: '',
            createTime: Date.now() + '',
            updateTime: Date.now() + '',
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

        await this.addArticleViewNumber(result.id, result.view);

        if (result.savePath) {
            const json = await this.findAricleJson(result.savePath);

            if (!json) {
                throw new BadRequestException('获取文章路径失败');
            }

            return Object.assign({}, { ...result }, { ...json });
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

    public async addArticleViewNumber(id: number, view: number) {
        return this.articleRepository.update(id, {
            view: view + 1,
        });
    }

    public async query(querySql: string): Promise<ArticleEntity[]> {
        return await this.articleRepository.query(querySql);
    }

    public async getArticleByCollectId(collectId: string): Promise<ArticleEntity[]> {
        return await this.articleRepository.find({
            where: {
                collectId,
            },
        });
    }

    public createArticle(data: { collectName: string; title: string; markdown: string; html: string }) {
        const DIR_PATH = path.join(config.STATIC_PATH, `/articles/${data.collectName}`);
        const FILE_PATH = path.join(DIR_PATH, `./${data.title}.json`);

        ensureDirSync(DIR_PATH);
        ensureFileSync(FILE_PATH);

        writeJsonSync(FILE_PATH, {
            markdown: data.markdown,
            html: data.html,
        });

        return FILE_PATH;
    }
}

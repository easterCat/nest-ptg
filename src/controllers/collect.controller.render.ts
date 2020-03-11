import { Controller, Get, Render } from '@nestjs/common';
import { CollectService } from '../services/collect.service';
import { ArticleService } from '../services/article.service';

@Controller('/render/collect')
export class CollectControllerRender {
    constructor(private readonly collectService: CollectService, private readonly articleService: ArticleService) {}

    @Get()
    @Render('collectCreate.hbs')
    renderCreateCollect() {
        return '';
    }

    @Get('/write')
    @Render('write.hbs')
    async renderCollect() {
        const allCollects = await this.collectService.findAll();
        // const allArticles = await this.articleService.findAll();
        return { title: '文章列表', allCollects, allArticles: [] };
    }
}

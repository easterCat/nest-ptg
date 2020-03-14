import { Controller, Get, Post, Body, HttpException } from '@nestjs/common';
import { CollectService } from '../services/collect.service';
import { ArticleService } from '../services/article.service';
import { CreateCollectDto } from '../dto/collect/collect.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('文集操作')
@Controller('/api/collect')
export class CollectControllerApi {
    constructor(private readonly collectService: CollectService, private readonly articleService: ArticleService) {}

    @Get('/all')
    async renderCollect() {
        const data = await this.collectService.findAll();
        return { code: 200, message: '获取成功', data };
    }

    @Post('/info')
    async getCollectInfo(@Body() body: { id: number }) {
        const { id } = body;
        const collect = await this.collectService.findById(id);
        if (collect && collect.length > 0) {
            const sql = `SELECT * FROM article WHERE collectId = ${id}`;
            const articles = await this.articleService.query(sql);

            return {
                code: 200,
                message: '获取成功',
                data: { ...collect[0], articles },
            };
        } else {
            return { code: 400, message: '合集id错误,请检查传参', data: {} };
        }
    }

    @Post('/delete')
    async deleteCollect(@Body('id') id: number) {
        if (id !== 0 && !id) {
            throw new HttpException('错误的参数', 400);
        }

        const data = await this.collectService.deleteById(id);
        return { code: 200, message: '删除成功', data };
    }

    @Post('/create')
    async createNewCollect(
        @Body()
        createCollect: CreateCollectDto,
    ) {
        const body = Object.assign(
            {},
            { ...createCollect },
            {
                createTime: +new Date(),
                updateTime: +new Date(),
                imagePath: '',
                articleIds: '',
                articleNum: 0,
            },
        );
        const data = await this.collectService.create(body);
        return { code: 200, message: '创建成功', data };
    }

    @Post('/update')
    async updateCollectById(@Body() body: { id: number; collectName: string }) {
        const result = await this.collectService.updateById(body);
        return { code: 200, message: '更新文集成功', data: result };
    }
}

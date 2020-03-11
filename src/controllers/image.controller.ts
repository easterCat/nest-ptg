import { Controller, Get, Param, Post, Query, Header, UploadedFile, Res, UseInterceptors, Body } from '@nestjs/common';
import { ImageService } from '../services/image.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiHeader } from '@nestjs/swagger';
import { readFileSync } from 'fs';

@ApiTags('图片操作')
@Controller('/image')
export class ImageController {
    constructor(private readonly imageService: ImageService) {}

    @Get(':wh/:color/:textcolor')
    @Header('Content-Type', 'image/png')
    public async createImage(
        @Param()
        params: {
            wh: string;
            color: string;
            textcolor: string;
        },
        @Query() query: { text: string },
        @Res() res,
    ) {
        const filePath = await this.imageService.createPlaceImage(params, query);
        const bf = readFileSync(filePath, 'binary');
        res.writeHead(200, 'Ok');
        res.write(bf, 'binary'); //格式必须为 binary，否则会出错
        res.end();
    }

    @ApiHeader({
        name: 'X-MyHeader',
        description: '图片上传',
    })
    @Post('upload')
    @UseInterceptors(FileInterceptor('image'))
    public async uploadFile(@UploadedFile() image: any, @Body() body: any) {
        const path = await this.imageService.uplodaImage(image);
        return {
            code: 200,
            message: '上传成功',
            data: { path: `http://172.18.12.30:6688${path}` },
        };
    }
}

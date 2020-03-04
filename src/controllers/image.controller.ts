import {
  Controller,
  Get,
  Param,
  Post,
  Query,
  Header,
  UploadedFile,
  UseInterceptors,
  Body,
} from '@nestjs/common';
import { ImageService } from '../services/image.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('/image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Get(':wh/:color/:textcolor')
  @Header('Content-Type', 'image/*')
  public async createImage(
    @Param()
    params: {
      wh: string;
      color: string;
      textcolor: string;
    },
    @Query() query: { text: string },
  ) {
    const result = await this.imageService.createPlaceImage(params, query);
    console.log('result :', `http://172.18.12.30:6688${result}`);
    return result;
  }

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

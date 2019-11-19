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
import { ImageService } from './image.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { join } from 'path';
import { createWriteStream } from 'fs';
import { config } from '../../global.config';
import {
  ensureDirSync,
  ensureFileSync,
  writeJsonSync,
  readJSONSync,
} from 'fs-extra';
import * as path from 'path';

@Controller('/image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Get(':wh/:color/:textcolor')
  @Header('Content-Type', 'image/png')
  async createImage(
    @Param()
    params: {
      wh: string;
      color: string;
      textcolor: string;
    },
    @Query() query: { text: string },
  ) {
    const result = await this.imageService.createImage(params, query);
    console.log('result :', result);
    return result;
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('image'))
  uploadFile(@UploadedFile() image: any, @Body() body: any) {
    const DIR_PATH = path.join(config.static, './upload/images');
    const FILE_PATH = path.join(DIR_PATH, `${image.originalname}`);
    ensureDirSync(DIR_PATH);
    ensureFileSync(FILE_PATH);
    const writeImage = createWriteStream(FILE_PATH);
    writeImage.write(image.buffer);
    return '上传成功';
  }
}

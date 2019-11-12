import { Controller, Get, Param, Query } from '@nestjs/common';
import { ImageService } from './image.service';

@Controller('/image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}
  @Get(':wh/:color/:textcolor')
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
    return result;
  }
}

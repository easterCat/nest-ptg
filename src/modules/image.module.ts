import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Image } from '../entity/image.entity';
import { ImageController } from '../controllers/image.controller';
import { ImageService } from '../services/image.service';

@Module({
  imports: [TypeOrmModule.forFeature([Image])],
  controllers: [ImageController],
  providers: [ImageService],
})
export class ImageModule {}

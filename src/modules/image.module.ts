import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImageEntiry } from '../entity/image.entity';
import { ImageController } from '../controllers/image.controller';
import { ImageService } from '../services/image.service';

@Module({
    imports: [TypeOrmModule.forFeature([ImageEntiry])],
    controllers: [ImageController],
    providers: [ImageService],
})
export class ImageModule {}

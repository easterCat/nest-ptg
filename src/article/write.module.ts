import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WriteControllerApi } from './write.controller.api';
import { WriteControllerRender } from './write.controller.render';
import { WriteService } from './write.service';
import { Article } from './entity/article.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Article])],
  controllers: [WriteControllerApi, WriteControllerRender],
  providers: [WriteService],
})
export class WriteModule {}

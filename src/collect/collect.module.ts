import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CollectControllerRender } from './collect.controller.render';
import { CollectControllerApi } from './collect.controller.api';
import { CollectService } from './collect.service';
import { WriteService } from '../article/write.service';
import { Collect } from './entity/collect.entity';
import { Article } from '../article/entity/article.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Collect]),
    TypeOrmModule.forFeature([Article]),
  ],
  controllers: [CollectControllerRender, CollectControllerApi],
  providers: [CollectService, WriteService],
})
export class CollectModule {}

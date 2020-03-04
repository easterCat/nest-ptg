import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CollectControllerRender } from '../controllers/collect.controller.render';
import { CollectControllerApi } from '../controllers/collect.controller.api';
import { CollectService } from '../services/collect.service';
import { ArticleService } from '../services/article.service';
import { Collect } from '../entity/collect.entity';
import { ArticleEntity } from '../entity/article.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Collect]),
    TypeOrmModule.forFeature([ArticleEntity]),
  ],
  controllers: [CollectControllerRender, CollectControllerApi],
  providers: [CollectService, ArticleService],
})
export class CollectModule {}

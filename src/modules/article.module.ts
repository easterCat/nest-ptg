import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleControllerApi } from '../controllers/article.controller.api';
import { ArticleControllerRender } from '../controllers/article.controller.render';
import { ArticleService } from '../services/article.service';
import { ArticleEntity } from '../entity/article.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ArticleEntity])],
  controllers: [ArticleControllerApi, ArticleControllerRender],
  providers: [ArticleService],
})
export class ArticleModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CollectControllerRender } from './collect.controller.render';
import { CollectControllerApi } from './collect.controller.api';
import { CollectService } from './collect.service';
import { WriteService } from '../article/write.service';
import { Collect } from './entity/collect.entity';
import { Write } from '../article/write.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Collect]),
    TypeOrmModule.forFeature([Write]),
  ],
  controllers: [CollectControllerRender, CollectControllerApi],
  providers: [CollectService, WriteService],
})
export class CollectModule {}

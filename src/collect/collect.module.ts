import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CollectController } from './collect.controller';
import { CollectService } from './collect.service';
import { WriteService } from '../article/write.service';
import { Collect } from './entity/collect.entity';
import { Write } from '../article/write.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Collect]),
    TypeOrmModule.forFeature([Write]),
  ],
  controllers: [CollectController],
  providers: [CollectService, WriteService],
})
export class CollectModule {}

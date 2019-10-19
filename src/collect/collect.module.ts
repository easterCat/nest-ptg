import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CollectController } from './collect.controller';
import { CollectService } from './collect.service';
import { Collect } from './collect.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Collect])],
  controllers: [CollectController],
  providers: [CollectService],
})
export class CollectModule {}

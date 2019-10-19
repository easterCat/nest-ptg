import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CollectController } from './collect.controller';
import { CollectService } from './collect.service';

@Module({
  controllers: [CollectController],
  providers: [CollectService],
})
export class CollectModule {}

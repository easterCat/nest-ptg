import { Module } from '@nestjs/common';
import { CollectController } from './collect.controller';

@Module({
  controllers: [CollectController],
})
export class CollectModule {}

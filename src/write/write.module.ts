import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WriteController } from './write.controller';
import { WriteService } from './write.service';
import { Write } from './write.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Write])],
  controllers: [WriteController],
  providers: [WriteService],
})
export class WriteModule {}

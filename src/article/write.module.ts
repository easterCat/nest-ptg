import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WriteControllerApi } from './write.controller.api';
import { WriteControllerRender } from './write.controller.render';
import { WriteService } from './write.service';
import { Write } from './write.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Write])],
  controllers: [WriteControllerApi, WriteControllerRender],
  providers: [WriteService],
})
export class WriteModule {}

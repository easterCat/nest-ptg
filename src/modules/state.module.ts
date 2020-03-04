import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StateController } from '../controllers/state.controller';
import { StateControllerApi } from '../controllers/state.controller.api';
import { StateService } from '../services/state.service';
import { State } from '../entity/state.entity';

// 动态
@Module({
  imports: [TypeOrmModule.forFeature([State])],
  controllers: [StateController, StateControllerApi],
  providers: [StateService],
})
export class StateModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StateController } from './state.controller';
import { StateControllerApi } from './state.controller.api';
import { StateService } from './state.service';
import { State } from './entity/state.entity';

@Module({
  imports: [TypeOrmModule.forFeature([State])],
  controllers: [StateController, StateControllerApi],
  providers: [StateService],
})
export class StateModule {}

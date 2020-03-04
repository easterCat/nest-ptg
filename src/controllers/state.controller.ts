import { Controller, Get, Render } from '@nestjs/common';
import { StateService } from '../services/state.service';

@Controller('/render/state')
export class StateController {
  constructor(private readonly stateService: StateService) {}

  @Get()
  @Render('state.hbs')
  async getAllState() {
    const lists = await this.stateService.findAll();
    return { lists };
  }
}

import {
  Controller,
  Get,
  Req,
  Post,
  Param,
  Delete,
  Put,
  Body,
  Query,
  Render,
} from '@nestjs/common';
import { PersonService } from '../services/person.service';
import { Person } from '../entity/person.entity';

@Controller('person')
export class PersonController {
  constructor(private readonly PersonService: PersonService) {}

  @Get()
  @Render('person.hbs')
  async root() {
    let result = await this.PersonService.findAll();
    return { title: '我是添加页面', message: '这里是person', result: result };
  }

  // 增
  @Post('create')
  @Render('person.hbs')
  async create(@Body() createData: any) {
    let res = await this.PersonService.create(createData);
    let result = await this.findAll();
    return { title: '我是添加页面', message: '这里是person', result: result };
  }

  // 删
  @Delete('delete/:id')
  async remove(@Param('id') id: string): Promise<string> {
    return this.PersonService.remove(id);
  }

  // 查
  @Get('find')
  async findAll(@Query() query?: any, @Req() request?: any): Promise<Person[]> {
    return this.PersonService.findAll();
  }

  @Get('find/:id')
  async findOne(@Param(':id') id: string): Promise<string> {
    console.log(id);
    return `This action returns a #${id} cat`;
  }

  // 改
  @Put('update/:id')
  async update(@Param('id') id: string, @Body() updateData: any) {
    return `This action updates a #${id} cat`;
  }
}

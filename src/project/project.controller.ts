import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { Roles } from '../common/decorators/roles.decorator';
import { IResult } from '../common/interfaces/result.interface';
import { RolesGuard } from '../core/guards/roles.guard';
import { ProjectEntity } from './project.entity';
import { ProjectService } from './project.service';
import moment = require('moment');

@Controller('api/project')
export class ProjectController {
  constructor(
    @Inject(ProjectService) private readonly projectService: ProjectService,
  ) {}

  @Post()
  @UseGuards(AuthGuard())
  async createPost(
    @Req() req: Request,
    @Body() createInput: ProjectEntity,
  ): Promise<IResult> {
    createInput = Object.assign({}, createInput, {
      user: req.user,
      createdAt: moment().unix(),
    });
    await this.projectService.create(createInput);
    return { code: 200, message: '创建帖子成功' };
  }

  @Delete(':id')
  @Roles('admin')
  @UseGuards(AuthGuard(), RolesGuard)
  async remove(@Param() id: number): Promise<IResult> {
    await this.projectService.remove(id);
    return { code: 200, message: '删除帖子成功' };
  }

  @Put(':id')
  @Roles('admin')
  @UseGuards(AuthGuard(), RolesGuard)
  async update(
    @Param() id: number,
    @Body() updateInput: ProjectEntity,
  ): Promise<IResult> {
    await this.projectService.update(id, updateInput);
    return { code: 200, message: '更新帖子成功' };
  }

  @Get()
  @UseGuards(AuthGuard())
  async findAll(@Req() req: Request): Promise<IResult> {
    // const data = await this.projectService.findAll(req.user.id);
    const data = await this.projectService.findAll(1);
    return { code: 200, message: '查询所有帖子成功', data };
  }

  @Get(':id')
  async findOne(@Param() id: number): Promise<IResult> {
    const data = await this.projectService.findOneById(id);
    return { code: 200, message: '查询帖子成功', data };
  }
}

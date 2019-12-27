import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';
import { ProjectEntity } from './project.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProjectEntity]),
    // 向帖子模块注册 passport，并配置默认策略为 jwt，因为覆盖了默认的策略，所以要在每个使用 @AuthGuard() 的模块导入 PassportModule
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [ProjectController],
  providers: [ProjectService],
})
export class ProjectModule {}

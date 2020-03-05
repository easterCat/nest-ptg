import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { PersonModule } from './modules/person.module';
import { ArticleModule } from './modules/article.module';
import { CollectModule } from './modules/collect.module';
import { UserModule } from './modules/user.module';
import { SessionModule } from './modules/session.module';
import { StateModule } from './modules/state.module';
import { ImageModule } from './modules/image.module';
import { ProjectModule } from './modules/project.module';
import config from '../global.config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: config.db.host,
      port: config.db.port,
      username: config.db.username,
      password: config.db.password,
      database: config.db.database,
      entities: ['src/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UserModule,
    PersonModule,
    ArticleModule,
    CollectModule,
    SessionModule,
    StateModule,
    ImageModule,
    ProjectModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}

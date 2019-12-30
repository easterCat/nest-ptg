import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { PersonModule } from './person/person.module';
import { WriteModule } from './article/write.module';
import { CollectModule } from './collect/collect.module';
import { UserModule } from './user/user.module';
import { SessionModule } from './session/session.module';
import { StateModule } from './state/state.module';
import { ImageModule } from './image/image.module';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UserModule,
    PersonModule,
    WriteModule,
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

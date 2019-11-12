import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { PersonModule } from './person/person.module';
import { WriteModule } from './article/write.module';
import { CollectModule } from './collect/collect.module';
import { UserModule } from './user/user.module';
import { SessionModule } from './session/session.module';
import { StateModule } from './state/state.module';
import { UploadModule } from './upload/upload.module';
import { ImageModule } from './image/image.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    PersonModule,
    WriteModule,
    CollectModule,
    UserModule,
    SessionModule,
    StateModule,
    UploadModule,
    ImageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}

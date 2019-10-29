import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { PersonModule } from './person/person.module';
import { WriteModule } from './article/write.module';
import { CollectController } from './collect/collect.controller';
import { CollectModule } from './collect/collect.module';

@Module({
  imports: [TypeOrmModule.forRoot(), PersonModule, WriteModule, CollectModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}

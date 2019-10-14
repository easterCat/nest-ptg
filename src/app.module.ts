import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { PersonModule } from './person/person.module';
import { WriteModule } from './write/write.module';

@Module({
  imports: [TypeOrmModule.forRoot(), PersonModule, WriteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}

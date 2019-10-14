import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonService } from './person.service';
import { PersonController } from './person.controller';
import { Person } from './person.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Person])],
  providers: [PersonService],
  controllers: [PersonController],
})
export class PersonModule {}

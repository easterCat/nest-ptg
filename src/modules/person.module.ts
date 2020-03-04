import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonService } from '../services/person.service';
import { PersonController } from '../controllers/person.controller';
import { Person } from '../entity/person.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Person])],
  providers: [PersonService],
  controllers: [PersonController],
})
export class PersonModule {}

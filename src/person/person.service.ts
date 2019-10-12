import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Person } from './person.entity';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person)
    private readonly personRepository: Repository<Person>,
  ) {}

  async create(createData: any): Promise<Person[]> {
    return await this.personRepository.save(createData);
  }
  async remove(id: string): Promise<any> {
    return await this.personRepository.delete(id);
  }
  async findAll(): Promise<Person[]> {
    return await this.personRepository.find();
  }
}

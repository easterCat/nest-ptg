import { Repository } from 'typeorm';
import { Person } from './person.entity';
export declare class PersonService {
    private readonly personRepository;
    constructor(personRepository: Repository<Person>);
    create(createData: any): Promise<Person[]>;
    remove(id: string): Promise<any>;
    findAll(): Promise<Person[]>;
}

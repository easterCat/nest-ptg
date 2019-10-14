import { PersonService } from './person.service';
import { Person } from './person.entity';
export declare class PersonController {
    private readonly PersonService;
    constructor(PersonService: PersonService);
    root(): Promise<{
        title: string;
        message: string;
        result: Person[];
    }>;
    create(createData: any): Promise<{
        title: string;
        message: string;
        result: Person[];
    }>;
    remove(id: string): Promise<string>;
    findAll(query?: any, request?: any): Promise<Person[]>;
    findOne(id: string): Promise<string>;
    update(id: string, updateData: any): Promise<string>;
}

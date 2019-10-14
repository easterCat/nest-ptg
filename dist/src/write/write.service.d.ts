import { Repository } from 'typeorm';
import { Write } from './write.entity';
export declare class WriteService {
    private readonly writeRepository;
    constructor(writeRepository: Repository<Write>);
    create(createData: any): Promise<Write[]>;
    remove(id: string): Promise<any>;
    findAll(): Promise<Write[]>;
    findById(id: number): Promise<Write[]>;
}

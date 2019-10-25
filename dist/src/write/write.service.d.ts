import { Repository } from 'typeorm';
import { Write } from './write.entity';
import { WriteDto } from './dto/write.dto';
export declare class WriteService {
    private readonly writeRepository;
    constructor(writeRepository: Repository<Write>);
    create(createData: any): Promise<Write[]>;
    remove(id: string): Promise<any>;
    update(updateData: WriteDto): Promise<any>;
    findAll(): Promise<Write[]>;
    findById(id: number): Promise<Write[]>;
}

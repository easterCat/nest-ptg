import { Repository } from 'typeorm';
import { Collect } from './entity/collect.entity';
export declare class CollectService {
    private readonly collectRepository;
    constructor(collectRepository: Repository<Collect>);
    create(createData: any): Promise<Collect[]>;
    remove(id: string): Promise<any>;
    findAll(): Promise<Collect[]>;
    findById(id: number): Promise<Collect[]>;
}

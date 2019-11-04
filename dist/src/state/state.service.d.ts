import { Repository } from 'typeorm';
import { State } from './entity/state.entity';
export declare class StateService {
    private readonly stateRepository;
    constructor(stateRepository: Repository<State>);
    create(body: any): Promise<State>;
    findAll(): Promise<any>;
    removeById(id: number): Promise<any>;
    find(time: string): Promise<any>;
}

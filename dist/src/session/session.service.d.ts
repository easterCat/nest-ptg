import { Repository } from 'typeorm';
import { Session } from './entity/session.entity';
export declare class SessionService {
    private readonly sessionRepository;
    constructor(sessionRepository: Repository<Session>);
    create(createData: any): Promise<Session>;
    find(query: {
        name?: string;
        token?: string;
    }): Promise<Session>;
}

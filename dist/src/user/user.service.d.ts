import { User } from './entity/user.entity';
import { Repository } from 'typeorm';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    create(createUserData: any): Promise<User>;
    createToken(name: string): Promise<any>;
    findOneByName(name: string): Promise<User>;
    validateUser(name: string): Promise<any>;
    login(name: string): Promise<any>;
}

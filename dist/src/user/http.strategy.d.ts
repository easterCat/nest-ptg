import { UserService } from './user.service';
interface IJwtPayload {
    name: string;
    pwd: string;
}
declare const HttpStrategy_base: new (...args: any[]) => any;
export declare class HttpStrategy extends HttpStrategy_base {
    private readonly userService;
    constructor(userService: UserService);
    validate(payload: IJwtPayload, done: any): Promise<any>;
}
export {};

import { UserService } from './user.service';
import { SessionService } from '../session/session.service';
import { Request } from 'express';
export declare class UserControllerApi {
    private readonly userService;
    private readonly sessionService;
    constructor(userService: UserService, sessionService: SessionService);
    login(paramData: {
        name: string;
    }): Promise<{
        code: number;
        message: string;
        data: {
            token: string;
            id: number;
            login: string;
            avatarUrl: string;
            name: string;
            createdAt: string;
            updatedAt: string;
        };
    }>;
    logged(req: Request): Promise<{
        code: number;
        messsage: string;
        data: any;
        message?: undefined;
    } | {
        code: number;
        message: string;
        data: {
            token: string;
            id: number;
            login: string;
            avatarUrl: string;
            name: string;
            createdAt: string;
            updatedAt: string;
        };
        messsage?: undefined;
    }>;
    githubOauth(quertData: {
        code: string;
    }): Promise<{
        url: string;
    }>;
}

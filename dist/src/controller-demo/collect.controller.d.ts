import { Response, Request } from 'express';
import { CreateCollectDto } from './createCollect.dto';
export declare class CollectController {
    findAll(): string;
    go(version: string): {
        url: string;
    };
    findOne(id: string, order: string): string;
    matchRoute(): string;
    findCollectInfo(): string;
    handleRequest(request: Request, response: Response): void;
    createNewCollect(createCollect: CreateCollectDto): string;
}

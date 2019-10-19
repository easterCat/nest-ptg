import { CreateCollectDto } from './collect.dto';
export declare class CollectController {
    findAll(): {
        title: string;
    };
    renderCreateCollect(): string;
    createNewCollect(createCollect: CreateCollectDto): string;
}

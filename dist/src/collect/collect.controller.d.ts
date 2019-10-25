import { CollectService } from './collect.service';
import { CreateCollectDto } from './dto/collect.dto';
export declare class CollectController {
    private readonly collectService;
    constructor(collectService: CollectService);
    renderCollect(): Promise<{
        allCollects: import("./collect.entity").Collect[];
    }>;
    renderCreateCollect(): string;
    createNewCollect(createCollect: CreateCollectDto): Promise<{
        code: number;
        message: string;
        data: import("./collect.entity").Collect[];
    }>;
}

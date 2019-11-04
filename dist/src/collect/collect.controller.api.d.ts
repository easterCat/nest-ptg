import { CollectService } from './collect.service';
import { CreateCollectDto } from './dto/collect.dto';
export declare class CollectControllerApi {
    private readonly collectService;
    constructor(collectService: CollectService);
    renderCollect(): Promise<{
        code: number;
        message: string;
        data: import("./entity/collect.entity").Collect[];
    }>;
    createNewCollect(createCollect: CreateCollectDto): Promise<{
        code: number;
        message: string;
        data: import("./entity/collect.entity").Collect[];
    }>;
}

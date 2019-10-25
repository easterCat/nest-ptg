import { CollectService } from './collect.service';
import { WriteService } from '../write/write.service';
import { CreateCollectDto } from './dto/collect.dto';
export declare class CollectController {
    private readonly collectService;
    private readonly writeService;
    constructor(collectService: CollectService, writeService: WriteService);
    renderCreateCollect(): string;
    renderCollect(): Promise<{
        allCollects: import("./entity/collect.entity").Collect[];
        allArticles: import("../write/write.entity").Write[];
    }>;
    createNewCollect(createCollect: CreateCollectDto): Promise<{
        code: number;
        message: string;
        data: import("./entity/collect.entity").Collect[];
    }>;
}

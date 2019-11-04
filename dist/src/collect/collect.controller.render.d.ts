import { CollectService } from './collect.service';
import { WriteService } from '../article/write.service';
import { CreateCollectDto } from './dto/collect.dto';
export declare class CollectControllerRender {
    private readonly collectService;
    private readonly writeService;
    constructor(collectService: CollectService, writeService: WriteService);
    renderCreateCollect(): string;
    renderCollect(): Promise<{
        allCollects: import("./entity/collect.entity").Collect[];
        allArticles: import("../article/entity/write.entity").Write[];
    }>;
    createNewCollect(createCollect: CreateCollectDto): Promise<{
        code: number;
        message: string;
        data: import("./entity/collect.entity").Collect[];
    }>;
}

import { WriteService } from './write.service';
import { CreateWriteDto, UpdateWriteDto } from './dto/write.dto';
export declare class WriteControllerApi {
    private readonly writeService;
    constructor(writeService: WriteService);
    findAll(): Promise<{
        code: number;
        message: string;
        data: import("./entity/write.entity").Write[];
    }>;
    findById(id: string | number): Promise<{
        code: number;
        message: string;
        data: import("./entity/write.entity").Write;
    }>;
    create(createWrite: CreateWriteDto): Promise<{
        code: number;
        message: string;
        data: import("./entity/write.entity").Write[];
    }>;
    updateWrite(updateWrite: UpdateWriteDto): Promise<{
        code: number;
        message: string;
        data: any;
    }>;
}

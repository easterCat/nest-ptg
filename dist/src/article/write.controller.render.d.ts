import { WriteService } from './write.service';
import { CreateWriteDto, UpdateWriteDto } from './dto/write.dto';
export declare class WriteControllerRender {
    private readonly writeService;
    constructor(writeService: WriteService);
    root(): Promise<{
        title: string;
        message: string;
        result: import("./entity/write.entity").Write[];
    }>;
    findAll(): Promise<{
        title: string;
        lists: import("./entity/write.entity").Write[];
        hots: import("./entity/write.entity").Write[];
    }>;
    renderById(params: any): Promise<{
        markdown: any;
        html: any;
        WriteID: number;
        CreateTime: string;
        UpdateTime: string;
        Title: string;
        collectID: number;
        collectName: string;
        Description: string;
        SavePath: string;
        Tags: string;
        title: string;
        result?: undefined;
    } | {
        title: string;
        result: {
            WriteID: number;
            CreateTime: string;
            Title: string;
            Description: string;
            Tags: string;
            markdown: string;
            html: string;
        };
    }>;
    findById(write: {
        id: number;
    }): Promise<{
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

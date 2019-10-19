import { WriteService } from './write.service';
export declare class WriteController {
    private readonly WriteService;
    constructor(WriteService: WriteService);
    root(): Promise<{
        title: string;
        message: string;
        result: import("./write.entity").Write[];
    }>;
    findAll(): Promise<{
        title: string;
        lists: import("./write.entity").Write[];
    }>;
    findById(params: any): Promise<{
        markdown: any;
        html: any;
        WriteID: number;
        CreateTime: string;
        Title: string;
        collect: string;
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
    create(data: any): Promise<import("./write.entity").Write[]>;
}

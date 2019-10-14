import { WriteService } from './write.service';
import { Write } from './write.entity';
export declare class WriteController {
    private readonly WriteService;
    constructor(WriteService: WriteService);
    root(): Promise<{
        title: string;
        message: string;
        result: Write[];
    }>;
    findAll(): Promise<{
        title: string;
        lists: Write[];
    }>;
    findById(params: any): Promise<{
        markdown: any;
        html: any;
        WriteID: number;
        CreateTime: string;
        Title: string;
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
    create(data: any): Promise<Write[]>;
}

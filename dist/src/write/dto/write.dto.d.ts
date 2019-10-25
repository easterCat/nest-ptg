export declare class WriteDto {
    readonly WriteID: number;
    readonly CreateTime: string;
    readonly UpdateTime: string;
    readonly Title: string;
    readonly collectID: number;
    readonly collectName: string;
    readonly Description: string;
    readonly SavePath: string;
    readonly Tags: string;
}
export declare class CreateWriteDto {
    readonly Title: string;
    readonly collectName: string;
    readonly collectID: number;
    readonly markdown: string;
    readonly html: string;
}
export declare class UpdateWriteDto {
    readonly id: number;
    readonly markdown: string;
    readonly html: string;
    readonly collectName: string;
    readonly collectID: number;
}

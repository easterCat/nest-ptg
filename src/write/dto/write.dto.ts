export class WriteDto {
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

export class CreateWriteDto {
  readonly Title: string;
  readonly collect: string;
  readonly markdown: string;
  readonly html: string;
}

export class UpdateWriteDto {
  readonly id: number;
  readonly markdown: string;
  readonly html: string;
}

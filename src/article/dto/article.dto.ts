export class ArticleDto {
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

export class CreateArticleDto {
  readonly Title: string;
  readonly collectName: string;
  readonly collectID: number;
  readonly markdown: string;
  readonly html: string;
}

export class UpdateArticleDto {
  readonly id: number;
  readonly markdown: string;
  readonly html: string;
  readonly collectName: string;
  readonly collectID: number;
}
export class UpdateArticleDto {
  readonly id: number;
  readonly markdown: string;
  readonly html: string;
  readonly collectName: string;
  readonly collectId: number;
  readonly title: string;
}

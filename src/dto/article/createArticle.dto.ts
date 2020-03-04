export class CreateArticleDto {
  readonly title: string;
  readonly collectName: string;
  readonly collectId: number;
  readonly markdown: string;
  readonly html: string;
  readonly authorId: string;
  readonly authorName: string;
}

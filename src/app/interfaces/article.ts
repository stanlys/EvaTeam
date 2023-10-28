export interface IArticle {
  id: number;
  title: string;
  body: string;
}

export type IArticles = Array<IArticle>;

export type INewArticle = Omit<IArticle, 'id'>;

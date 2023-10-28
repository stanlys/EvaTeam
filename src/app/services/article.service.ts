import { Injectable } from '@angular/core';
import { IArticle, IArticles, INewArticle } from '../interfaces/article';
import { DEFAULT_ARTICLES } from '../MOCK';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  public articles: IArticles = DEFAULT_ARTICLES;

  constructor() {}

  public addArticle(newArticle: INewArticle): number {
    const id = this.articles.length+1;
    this.articles.push({ ...newArticle, id });
    return id;
  }

  public getArticleById(id: number): IArticle | undefined {
    return this.articles.find((article) => article.id === id);
  }
}

import { Injectable } from '@angular/core';
import { IArticle, IArticles, INewArticle } from '../interfaces/article';
import { DEFAULT_ARTICLES } from '../MOCK';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  public isShowDialog$ = new BehaviorSubject<boolean>(false);

  constructor() {}

  public hideOrShow(): void {
    this.isShowDialog$.next(!this.isShowDialog$.value);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  public article: string = '';

  constructor(
    private router: ActivatedRoute,
    private articleService: ArticleService
  ) {

    //можно реализовать через дополнительный компонент, но в данном случае нет смысла
    this.router.paramMap.subscribe((newValue) => {
      const id = newValue.get('id');
      if (id === null) {
        this.article = 'Ознакомтесь с нашими статьями в боковом меню. Добавить статьи можно с помощью кнопки снизу. ';
        return;
      }
      const article = this.articleService.getArticleById(Number(id));
      if (article) this.article = article.body;
      else this.article = 'статья не найдена ';
    });
  }

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(
    public articleService: ArticleService,
    public dialogService: DialogService
  ) {}

  ngOnInit(): void {}

  public onHideShowClick(): void {
    this.dialogService.hideOrShow();
  }
}

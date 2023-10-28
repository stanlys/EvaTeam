import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';
import { DialogService } from './services/dialog.service';
import { ArticleService } from './services/article.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name: string;
  animal: string;

  constructor(
    public dialog: MatDialog,
    private dialogService: DialogService,
    private articleService: ArticleService
  ) {
    dialogService.isShowDialog$.subscribe((isShow) => {
      if (isShow) this.openDialog();
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { title: '', body: '' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.dialogService.hideOrShow();
      if (!result.article) return;
      this.articleService.addArticle({
        title: result.article.title,
        body: result.article.body,
      });
    });
  }
}

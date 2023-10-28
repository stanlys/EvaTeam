import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  constructor() {}

  public article = new FormGroup({
    title: new FormControl(''),
    body: new FormControl(''),
  });

  ngOnInit(): void {}

  public isDisabled(): boolean {
    this.article.valid
    return false;
  }

}

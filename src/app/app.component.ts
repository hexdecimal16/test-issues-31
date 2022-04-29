import { Component } from '@angular/core';
import { LocalDataSource } from 'angular2-smart-table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  settings = {
    columns: {
      name: {
        title: 'Name',
      },
      gender: {
        title: 'Gender',
      },
    },
  };
  data = [
    {
      name: 'Leanne Graham',
      gender: 'male',
    },
  ];
  title = 'test';
  source: LocalDataSource = new LocalDataSource();

  constructor() {}

  ngOnInit(): void {
    //  Testing bug https://github.com/dj-fiorex/angular2-smart-table/issues/31
    this.source.load(this.data).then();
    this.source.empty().then();
  }
}

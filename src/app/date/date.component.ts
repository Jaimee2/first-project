import { Component } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})

export class DateComponent {
  nowDate: string;

  constructor() {
    this.nowDate = this.getNowDate();

    setInterval(() => {
      this.nowDate = this.getNowDate();
    }, 1000);
  }

  getNowDate(): string {
    let currentDate = new Date();
    return currentDate.toLocaleDateString() + " " + currentDate.toLocaleTimeString();
  }
}


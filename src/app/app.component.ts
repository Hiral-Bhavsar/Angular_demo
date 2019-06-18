import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  message = 'to this';
  msgNew = 'demo';
  date = '03/04/1993';
  myName =  'Hiral';
  status: boolean;
  posts: object[];
  mainMenuItems: object[];
  status1: boolean;
  lastName = 'Bhavsar';

  constructor() {
    this.posts = [
      {title: 'Post 1'},
      {title: 'Post 2'},
      {title: 'Post 3'},
      {title: 'Post 4'},
      {title: 'Post 5'},
      {title: 'Post 6'}   ];

    this.mainMenuItems = [
      {title: 'Home'},
      {title: 'Service'},
      {title: 'Contact'}
    ];
  }

  getStatus() {
    this.status = true;
  }
  getColorStatus() {
    this.status1 = true;
    console.log('yes it is.');
  }
  displayMessage() {
    return this.date;
  }

  greetPeople() {
    alert('Hi there');
  }
  
}



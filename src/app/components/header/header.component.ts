import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, LoginComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  loggedDat: any;

  constructor() {
    //assigning the logged in user data to loggedData variable
    const loggedData = localStorage.getItem('user');

    if (loggedData) {
      const data = JSON.parse(loggedData);
      this.loggedDat = data;
    }
  }

  logoff() {
    localStorage.removeItem('user');
    this.loggedDat = undefined;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="navbar is-dark">
      <!-- logo -->
      <div class="navbar-brand">
        <a routerLink="/" class="navbar-item">
          <img src="assets/img/angular-logo.png">
        </a>
        <a id="burger" (click)="onBurgerClick()" aria-expanded="false" class="navbar-burger">
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>

      <!-- menu -->
      <div id="navbar-menu" class="navbar-menu">
        <div class="navbar-start">
          <a (click)="closeBurger()" class="navbar-item" routerLink="/">Home</a>
          <a (click)="closeBurger()" class="navbar-item" routerLink="/contact">Contact</a>
          <a (click)="closeBurger()" class="navbar-item" routerLink="/users">Users</a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .navbar {
      background-color: #1D1F24;
    }
  `]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onBurgerClick(): void {
    const navbarMenu = document.getElementById('navbar-menu');
    if (navbarMenu!.classList.contains('is-active')) {
      navbarMenu!.classList.remove('is-active');
    } else {
      navbarMenu!.classList.add('is-active');
    }
      
  }

  closeBurger(): void {
    const navbarMenu = document.getElementById('navbar-menu');
    navbarMenu!.classList.remove('is-active');
  }

}

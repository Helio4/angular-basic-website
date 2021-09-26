import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="main-root">
      <!-- header -->
      <div class="header-container">
        <app-header></app-header>
      </div>
      
      <div class="main-container">
        <!-- routes get injected here -->
        <div class="app-container">
          <router-outlet></router-outlet>
        </div>
        <!-- footer -->
        <app-footer></app-footer>
      </div> 
    </div>
  `,
  styles: [`
    .main-root {
      position: relative;
    }

    .main-container {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

    .app-container {
      padding-top: 52px;
      flex: 1;
    }

    .header-container {
      z-index: 9;
      position: absolute;
      width: 100%
    }

  `]
})
export class AppComponent {

}

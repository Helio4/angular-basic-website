import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <footer class="footer">
      <div class="container content has-text-centered">
        <p class="is-white">Website created by Helio4</p>
        <div class="sns-icons">
          <a href="https://www.linkedin.com/in/jemarhe/" target="_blank" class="fa fa-linkedin"></a>
          <a href="https://github.com/Helio4" target="_blank" class="fa fa-github"></a>
          <a href="https://angular.io/" target="_blank" class="fa fa-globe"></a>
        </div>
      </div>
      
    </footer>
  `,
  styles: [`
    .footer {
      background-color: #273133;
    }

    .sns-icons {
      font-size: 125%;
      display: flex;
      max-width: 65px;
      justify-content: space-between;
      margin: 0 auto;
    }
    .sns-icons>a.fa, p {
      color: #D9D9D9;
    }
  `]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

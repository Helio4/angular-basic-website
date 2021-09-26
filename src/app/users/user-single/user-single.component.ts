import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user-single',
  template: `
    <section class="section">
      <div class="container">
        <div class="card" *ngIf="user">

          <div class="card-content">

            <img [src]="user.avatar_url">

            <div class="media-container">
              <p class="title is-4">
                {{ user.login }}
                <br>
                <a href="{{ user.html_url }}" target="__blank" class="subtitle is-6">@{{ user.login }}</a>
              </p>
            </div>
            <br>
            <a type="button" [href]="downloadJsonHref" download="{{ user.login }}.json" class="button is-link download-json">
              Download JSON
            </a>

          </div>
          
        </div>
      </div>
    </section>
  `,
  styles: [`

    @media(min-width: 734px) //if more than 734 px
    {
      .card-content {
        height: 348px;
      }

      .download-json {
        float: right;
        font-size: 120%;
        bottom: 22px;
        right: 22px;
        position: absolute;
      }

      img {
        border-radius: 5%;
        width: 300px;
        float: left;
      }

      .media-container {
        display: flex;
        align-items: center;
        justify-content: left;
        padding-left: 20px;
      }

      .title {
        font-size: 3rem;
      }

      .subtitle {
        font-size: 1.75rem;
        color: #8f8f8f;
      }

    }

    img {
      border-radius: 5%;
    }

    .download-json {
      font-size: 120%;
    }

    .media-container {
      display: flex;
      align-items: center;
      justify-content: left;
      padding-top: 20px;
    }

    

    

    
  `]
})
export class UserSingleComponent implements OnInit {

  user: any;
  downloadJsonHref: SafeUrl = "";

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    // Grab the username out of the url
    this.route.params.subscribe(params => {
      const username = params['username'];

      // Use the userservice to get data from github api
      this.userService.getUser(username).subscribe(user => {
        this.user = user
        this.generateDownloadJsonUri();
      });
      
    })
  }

  generateDownloadJsonUri(): void {
    var json = JSON.stringify(this.user);
    var uri = this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(json));
    this.downloadJsonHref = uri;
  }

}

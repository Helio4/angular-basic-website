import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user-list',
  template: `
    <section class="section">
      <div class="container">
        <div class="columns is-multiline" *ngIf="users">

          <div class="column is-4" *ngFor="let user of users | async">
            
            <!-- User card -->
            <a routerLink="/users/{{ user.login }}">
              <div class="card">
                <div class="card-content">
                
                  <img class="profile-picture" src="{{ user.avatar_url }}" alt="">

                  <div class="name-container">
                    <p class="title is-4">{{ user.login }}</p>
                    <p class="subtitle is-6">@{{ user.login }}</p>
                  </div>
                </div>
              </div>
            </a>
            
          </div>

        </div>
      </div>
    </section>
  `,
  styles: [`
    img {
      width: 90px;
      border-radius: 50%;
    }

    .profile-picture {
      padding-right: 20px;
    }

    .card-content {
      display: flex;
      align-items: center;
      justify-content: left;
      clear: left;
    }

    .subtitle {
      color: #8f8f8f;
    }

    .card:hover {
      box-shadow: 0 0.5em 1em -0.125em rgb(30 3 255 / 10%), 0 0px 0 1px rgb(127 124 169 / 70%);
    }
  `]
})
export class UserListComponent implements OnInit {

  users = <any>[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers(32);
  }

}

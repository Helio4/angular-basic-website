import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section class="hero is-primary is-bold is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          
          <div class="text-block">
          <img src="/assets/img/simple-logo.png" width="350px" alt="">
            <p class="title">
              Welcome to my Home page!
            </p>
            <p class="text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore ullam odit exercitationem rerum? Fugit mollitia dicta dolore natus? Porro necessitatibus labore omnis ab dicta animi vero nesciunt, obcaecati minima, possimus eius enim quisquam commodi eos modi sed! Molestias at maiores quod id eum porro inventore ratione deleniti necessitatibus eius, sequi tempora veritatis, debitis placeat sed rerum atque officiis laborum corporis. Architecto, eaque. Ut asperiores placeat esse autem similique tempora nulla ipsum, consectetur dolorum omnis facere consequatur, rerum delectus earum ipsam! Quo libero, nostrum quisquam ipsa optio earum fugiat minus consequuntur aliquid nemo quasi sed assumenda facilis enim culpa provident eligendi.
            </p>
          </div> 
          <hr> 
          <div class="text-block">
            <img src="/assets/img/responsive-framework.svg" width="420px" alt="">
            <p class="text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi aspernatur, iste architecto accusamus sint, quis eveniet repellat dolorum ad suscipit commodi temporibus magni nulla, debitis minima. Iste quaerat, esse minus adipisci, ullam sit, voluptas cumque non ipsum itaque veniam nemo autem omnis suscipit! Perspiciatis accusamus culpa illo labore officia, quo voluptatem placeat nesciunt doloribus! Laudantium, dolor qui aut dolore vitae error corrupti voluptatem ad id sequi quisquam repellendus excepturi eveniet! Hic molestiae deserunt at enim?
            </p>
          </div>
          <hr> 
          <div class="text-block">
            <img src="/assets/img/joyful-development.svg" width="420px" alt="">
            <p class="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In eius consequatur deleniti, minus eaque mollitia ex perferendis aut recusandae consectetur vel, quis rerum necessitatibus sequi officia voluptatibus, eos sit. Quis placeat voluptatibus cum omnis earum facilis quasi deserunt, consequuntur voluptate delectus dolores qui totam blanditiis. Veritatis commodi libero at recusandae.
            </p>
          </div>

        </div>  
      </div>
    </section>
  `,
  styles: [`
    .hero {
      background-image: url('/assets/img/code.png') !important;
      background-size: cover;
      background-position: center center;
    }

    .text-block {
      padding-top: 40px;
      padding-bottom: 40px;
      width: 90%;
      margin: auto;
    }

    hr {
      width: 20%;
      margin: auto;
    }

    img {
      padding-bottom: 30px;
    }

    .text {
      width: 90%;
      margin: auto;
      text-align: left;
    }

    .title {
      width: 90%;
      margin: auto;
      padding-bottom: 20px;
    }

    @media(min-width: 660px) //if more than 660 px
    {
      .text{
        width: 600px
      }

      .title {
        width: 100%
      }
    }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

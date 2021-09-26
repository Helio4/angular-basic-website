import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Contact us!</h1>
        </div>
      </div>
    </section>

    <section class="section constrained is-left">
      <div class="container">

        <!-- contact form -->
        <form (ngSubmit)="submitForm()" #contactForm="ngForm">

          <!-- name -->
          <div class="field">
            <label class="label">Name</label>
            <input 
              type="text" 
              name="name" 
              class="input" 
              [(ngModel)]="name" 
              #nameInput="ngModel" 
              required>

            <div class="help is-required" *ngIf="nameInput.invalid && nameInput.touched">Your name is required.</div>
          
          </div>

          <!-- email -->
          <div class="field">
            <label class="label">Email</label>
            <input 
              type="email" 
              name="email" 
              class="input" 
              [(ngModel)]="email"
              #emailInput="ngModel"
              required
              email>
          
            <div class="help is-error" *ngIf="emailInput.invalid && emailInput.touched">Your email is required and needs to be a valid email.</div>
          </div>
          

          <!-- message -->
          <div class="field">
            <label class="label">Your Message</label>
            <textarea name="message" class="textarea" [(ngModel)]="message"></textarea>
          </div>

          <!-- submit button -->
          <div class="field">
            <button 
              type="submit"
              class="button is-large is-warning"
              [disabled]="contactForm.invalid">
              Send
            </button>
          
          </div>

        </form>

      </div>
    </section>
  `,
  styles: [`
    .hero {
      background-image: linear-gradient(
        141deg, #031C26 0%, #093040 71%, #0D3640 100%);
    }

    .constrained {
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
    }
  `]
})

export class ContactComponent implements OnInit {

  name: string = "";
  email: string = "";
  message: string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {
    const message = `Name: ${this.name}.\nEmail: ${this.email}.\nMessage: ${this.message}`
    // grab all the fields and their values
    alert(message);
  
  }

}

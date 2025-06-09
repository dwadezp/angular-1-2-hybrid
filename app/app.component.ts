import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{ greeting }} {{ name }}</h1>
    <button (click)="toggleGreeting()">Toggle Greeting</button>
  `
})
export class AppComponent implements OnInit {
  name = 'Angular';
  hour!: number;
  greeting!: string;
  showTimeBasedGreeting = true;

  ngOnInit() {
    this.hour = new Date().getHours();
    this.greeting = this.computeGreeting();
    this.greetingDuplicate = this.computeGreetingDuplicate();
  }

  computeGreeting(): string {
    // 1st decision: is it time-based? 
    if (!this.showTimeBasedGreeting) {
      return 'Hello';
    }
    // 2nd decision: morning, afternoon or evening
    if (this.hour < 12) {
      return 'Good morning';
    } else if (this.hour < 18) {
      return 'Good afternoon';
    } else {
      return 'Good evening';
    }
  }

    computeGreetingDuplicate(): string {
    // 1st decision: is it time-based? 
    if (!this.showTimeBasedGreeting) {
      return 'Hello';
    }
    // 2nd decision: morning, afternoon or evening
    if (this.hour < 12) {
      return 'Good morning';
    } else if (this.hour < 18) {
      return 'Good afternoon';
    } else {
      return 'Good evening';
    }
  }

  toggleGreeting() {
    this.showTimeBasedGreeting = !this.showTimeBasedGreeting;
    this.greeting = this.computeGreeting();
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'feedback-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Welcome to {{title}}!</h1>

    
  `,
  styles: [],
})
export class AppComponent {
  title = 'ng-feedback-widget';
}

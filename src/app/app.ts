import { Component, signal } from '@angular/core';
import { ButtonComponent } from './shared/components/button/button';

@Component({
  selector: 'app-root',
  imports: [ButtonComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class AppComponent {
  protected readonly title = signal('filmly-angular');
}

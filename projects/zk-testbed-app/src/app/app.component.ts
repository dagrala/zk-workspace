import { Component, signal } from '@angular/core';
import { TitleColor, ZkSideMenuComponent } from 'zk-side-menu';

@Component({
  selector: 'app-root',
  imports: [ZkSideMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'zk-testbed-app';

  TitleColor = TitleColor;
  isAuthenticated = signal(false);
}

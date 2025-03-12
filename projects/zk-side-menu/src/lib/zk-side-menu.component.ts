import { Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export enum TitleColor {
  red = 'text-red-500',
  green = 'text-green-500',
  blue = 'text-blue-500',
  purple = 'text-purple-500',
}

@Component({
  selector: 'lib-zk-side-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './zk-side-menu.component.html',
  styles: ``,
})
export class ZkSideMenuComponent {
  isAuthenticated = input(false);

  title = input('APX');
  subTitle = input('Corp');

  titleColor = input<TitleColor>(TitleColor.purple);

  signOut = output<void>();
  signIn = output<void>();
}

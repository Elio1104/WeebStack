import {Component, input, output} from '@angular/core';
import {RouterModule} from '@angular/router';
import {NgClass, NgFor, NgIf} from '@angular/common';
import {MatSlideToggle} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, NgFor, NgClass, NgIf, MatSlideToggle],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isLeftSidebarCollapsed = input.required<boolean>();
  changeIsLeftSidebarCollapsed = output<boolean>();

  items = [
    { label: 'Home', icon: 'fa fa-cube', routeLink: 'home' },
    { label: 'Drag', icon: 'fa fa-wrench', routeLink: 'drag' },
  ]

  toggleCollapse() : void {
    this.changeIsLeftSidebarCollapsed.emit(!this.isLeftSidebarCollapsed());
  }
}

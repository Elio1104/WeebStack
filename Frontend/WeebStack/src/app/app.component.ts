import {Component, computed, HostListener, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavbarComponent} from './features/navbar/navbar.component';
import {NgClass} from '@angular/common';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, NgClass, MatSlideToggleModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isLeftSidebarCollapsed = signal<boolean>(true);
  screenWidth = signal<number>(window.innerWidth);
  title = 'WeebStack';

  @HostListener('window:resize')
  onResize() : void {
    this.screenWidth.set(window.innerWidth);
    if (this.screenWidth() < 768) {
      this.isLeftSidebarCollapsed.set(true);
    }
  }

  sizeClass = computed(() => {
    if (this.isLeftSidebarCollapsed())
      return '';
    return this.screenWidth() > 768 ? 'body-trimmed' : 'body-md-screen';

  })

  changeIsLeftSidebarCollapsed(IsLeftSidebarCollapsed : boolean) : void {
    this.isLeftSidebarCollapsed.set(IsLeftSidebarCollapsed);
  }
}

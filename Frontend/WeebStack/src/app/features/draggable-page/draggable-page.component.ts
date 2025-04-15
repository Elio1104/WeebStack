import { Component } from '@angular/core';
import {DraggableWindowComponent} from './draggable-window/draggable-window.component';

@Component({
  selector: 'app-draggable-page',
  imports: [
    DraggableWindowComponent
  ],
  templateUrl: './draggable-page.component.html',
  styleUrl: './draggable-page.component.scss'
})
export class DraggablePageComponent {

}

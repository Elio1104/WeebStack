import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-draggable-window',
  templateUrl: './draggable-window.component.html',
  styleUrls: ['./draggable-window.component.scss']
})
export class DraggableWindowComponent implements OnInit {
  @Input() title: string = 'Fenêtre';
  isDragging: boolean = false;
  offsetX: number = 0;
  offsetY: number = 0;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    const element = this.elementRef.nativeElement.querySelector('.draggable-window');
    element.style.position = 'absolute';
    element.style.top = '100px';
    element.style.left = '100px';
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent): void {
    this.isDragging = true;
    this.offsetX = event.clientX - this.elementRef.nativeElement.querySelector('.draggable-window').offsetLeft;
    this.offsetY = event.clientY - this.elementRef.nativeElement.querySelector('.draggable-window').offsetTop;
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (this.isDragging) {
      const element = this.elementRef.nativeElement.querySelector('.draggable-window');
      element.style.left = `${event.clientX - this.offsetX}px`;
      element.style.top = `${event.clientY - this.offsetY}px`;
    }
  }

  @HostListener('document:mouseup')
  onMouseUp(): void {
    this.isDragging = false;
  }
}

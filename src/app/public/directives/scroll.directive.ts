import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScroll]',
})
export class ScrollDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}
  isDragging: boolean = false;

  @HostListener('mousedown') mousedown() {
    this.isDragging = true;
  }
  @HostListener('mouseleave') mouseleave() {
    this.isDragging = false;
  }
  @HostListener('mouseup') mouseup() {
    this.isDragging = false;
  }

  @HostListener('mousemove', ['$event']) function(event: MouseEvent) {
    if (!this.isDragging) return;
    this.element.nativeElement.scrollLeft -= event.movementX;
  }
}

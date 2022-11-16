import {
  ContentChild,
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appClick]',
})
export class ClickDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}
  @HostListener('click') function() {
    console.log(this.element.nativeElement.getAttribute('id'));
  }
}

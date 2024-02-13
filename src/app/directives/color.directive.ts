import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appColorDirective]'
})
export class ColorDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.elementRef.nativeElement, "color", "#2c4fdd"); // codstyle кавычки одинарные в ts файлах
  }
}

import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHigh]'
})
export class HighDirective {

  constructor(private el: ElementRef) {
   }

}

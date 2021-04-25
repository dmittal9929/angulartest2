import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[Highlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) {
    console.log(el)
    this.highlight('yellow')    
  }

   private highlight(color:string){
    this.el.nativeElement.style.backgroundColor = color;
   }
   @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
  



}


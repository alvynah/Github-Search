import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }

  // tslint:disable-next-line:typedef
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('chocolate');
  }

  // tslint:disable-next-line:typedef
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  // tslint:disable-next-line:typedef
  private highlight(color: any) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}


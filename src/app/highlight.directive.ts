import { Directive ,ElementRef} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private ele:ElementRef) { 
    ele.nativeElement.style.backgroundColor ="#E92668"
  }

}

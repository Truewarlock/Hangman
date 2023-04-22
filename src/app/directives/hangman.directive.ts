import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHangman]'
})
export class HangmanDirective {


  @Input('appHangman') set appHangman(value: number) {
    const imageUrl = `../assets/mrIncredible/p${value}.png`;
    this.el.nativeElement.src = imageUrl;
  }

  constructor(private el: ElementRef) {}

}

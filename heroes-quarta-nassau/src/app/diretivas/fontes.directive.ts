import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[fontes]'
})
export class FontesDirective {
  @HostBinding('style.fontFamily') tipo = 'comic sans ms'
  @HostBinding('style.fontSize') tamanho = ''
  @HostBinding('style.transition') propriedade = 'font-size 0.7s'
  @HostListener('mouseover') aumenta(){
    this.tamanho = '30px'
  }
  @HostListener('mouseleave') diminui(){
    this.tamanho = '20px'
  }
  constructor() { }

}

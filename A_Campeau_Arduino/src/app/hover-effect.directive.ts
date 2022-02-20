import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverEffect]'
})
export class HoverEffectDirective {
  @Input() styleType?: string;

  constructor(private elem: ElementRef) { 
    this.elem.nativeElement.style.cursor = "pointer";
  }

  @HostListener('mouseover') onHover(typeElem: any){
    this.elem.nativeElement.style.textDecoration = this.styleType ?? "none";
    this.elem.nativeElement.style.fontWeight = this.styleType ?? "normal";
  }

  @HostListener('mouseover') offHover(typeElem: any){
    this.elem.nativeElement.style.textDecoration = "none";
    this.elem.nativeElement.style.fontWeight = "normal";
  }

}

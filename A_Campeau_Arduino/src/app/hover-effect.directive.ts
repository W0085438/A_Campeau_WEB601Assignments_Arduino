import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHoverEffect]'
})
export class HoverEffectDirective implements OnInit {
  @Input() styleType?: string;

  constructor(private elem: ElementRef) { 
    this.elem.nativeElement.style.cursor = "pointer";
  }
  ngOnInit(): void {
      
  }

  @HostListener('mouseover') onHover(typeElem: any){
    this.elem.nativeElement.style.textDecoration = this.styleType ?? "none";
    this.elem.nativeElement.style.fontWeight = this.styleType ?? "normal";
  }

  @HostListener('mouseout') offHover(typeElem: any){
    this.elem.nativeElement.style.textDecoration = "none";
    this.elem.nativeElement.style.fontWeight = "normal";
  }

  private hoverEffectFunction() {
    this.elem.nativeElement.style.textDecoration = "underline";
  }

}

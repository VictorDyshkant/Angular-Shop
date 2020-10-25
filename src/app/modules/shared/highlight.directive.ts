import {Directive, ElementRef, Renderer2, HostListener} from '@angular/core';
 
@Directive({
    selector: 'highlight'
})
export class HighlightDirective{
     
    constructor(private element: ElementRef,private renderer: Renderer2){
        this.renderer.setStyle(this.element.nativeElement, "cursor", "pointer");
    }

    ngOnInit() {
        console.log('Directive called');
      }
     
    @HostListener("mouseover") onMouseOver() {
        this.element.nativeElement.style.backgroundColor = "red";
    }

    @HostListener("click") onClick() {
        this.element.nativeElement.style.backgroundColor = "red";
    }
}



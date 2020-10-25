import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appHighlight]'
})
export class HighlightDirective {

    @HostBinding('class')
    attrClass = 'highlighting';
   
    private color = 'lightgreen';

    constructor(private element: ElementRef) { }

    @HostListener('mouseenter')
    onMouseEnter(): void {
        this.setBackgroundColor(this.color);
    }

    @HostListener('mouseleave')
    onMouseLeave(): void {
        this.setBackgroundColor(null);
    }

    private setBackgroundColor(color: string): void {
        this.element.nativeElement.style.backgroundColor = color;
    }
}



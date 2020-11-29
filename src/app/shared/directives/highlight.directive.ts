import { Directive, ElementRef, HostListener, HostBinding, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appHighlight]'
})
export class HighlightDirective {

    @HostBinding('class')
    attrClass = 'highlighting';

    private color = 'lightgreen';

    constructor(private element: ElementRef, private render: Renderer2) { }

    @HostListener('mouseenter')
    onMouseEnter(): void {
        this.setBackgroundColor(this.color);
    }

    @HostListener('mouseleave')
    onMouseLeave(): void {
        this.setBackgroundColor(null);
    }

    private setBackgroundColor(color: string): void {
        this.render.setStyle(this.element.nativeElement, 'backgroundColor', color);
    }
}



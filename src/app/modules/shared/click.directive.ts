import { Directive, ElementRef, HostListener, Renderer2, Input } from '@angular/core';

@Directive({
    selector: '[appClick]'
})
export class ClickDirective {
    private isClicked = false;
    private defaultColor = 'black';

    @Input() color: string;

    constructor(private element: ElementRef, private renderer: Renderer2) {
    }

    @HostListener('click') onClick() {
        this.isClicked = !this.isClicked;
        if (this.isClicked) {
            this.renderer.setStyle(this.element.nativeElement, 'border', `2px solid ${this.color ? this.color : this.defaultColor}`);
        } else {
            this.renderer.setStyle(this.element.nativeElement, 'border', null);
        }
    }
}

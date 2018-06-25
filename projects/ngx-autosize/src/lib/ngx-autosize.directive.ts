import {AfterViewInit, Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
    selector: 'textarea[ngxAutosize]'
})
export class NgxAutosizeDirective implements AfterViewInit {

    // Min/max heights for the textarea.
    @Input() @HostBinding('style.min-height') minHeight: string | null = null;
    @Input() @HostBinding('style.max-height') maxHeight: string | null = null;

    get element() {
        return this._elementRef.nativeElement;
    }

    constructor(private _renderer: Renderer2,
                private _elementRef: ElementRef) {
    }

    ngAfterViewInit() {
        // Update the styles after the DOM has loaded.
        this.updateStyles();
    }

    @HostListener('window:resize')
    onWindowResize() {
        // Update the styles when the window is resized.
        this.updateStyles();
    }

    @HostListener('input')
    onInputReceived() {
        // Update the styles after the textarea received input.
        this.updateStyles();
    }

    private updateStyles() {
        // If the element does not exist exit.
        if (!this.element) {
            return;
        }

        // If the scroll height is the same height as the element, then exit.
        if (this.element.style.height === this.element.scrollHeight + 'px') {
            return;
        }

        // Set the style of the element to 'auto' to reset the element.
        this._renderer.setStyle(this.element, 'height', 'auto');

        // Set the style of the element to the scroll height to make
        // the element fit all the text.
        this._renderer.setStyle(this.element, 'height', this.element.scrollHeight + 'px');
    }

}

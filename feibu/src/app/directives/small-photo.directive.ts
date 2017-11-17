import { Directive, ElementRef, Input } from '@angular/core';

@Directive({ selector: '[small-photo]' })
export class SmallPhotoDirective {
    constructor(el: ElementRef) {
       el.nativeElement.style.width = "70px";
       el.nativeElement.style.height = "70px";
    }
}
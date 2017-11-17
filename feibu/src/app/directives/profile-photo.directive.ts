import { Directive, ElementRef, Input } from '@angular/core';

@Directive({ selector: '[profile-photo]' })
export class ProfilePhotoDirective {
    constructor(el: ElementRef) {
       el.nativeElement.style.width = "200px";
       el.nativeElement.style.height = "200px";
    }
}

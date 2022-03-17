import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  @HostListener('error') handleError(): void {
    const nativo = this.elHost.nativeElement;
    nativo.src = '../../../assets/image/img-broken.jpg'
  }
  constructor(private elHost: ElementRef) { }

}

import { Directive, ElementRef, HostListener, inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '[scrollShadowDirective]',
  standalone: true,
})
export class ScrollShadowDirective { 

  private el = inject(ElementRef);
  private renderer = inject(Renderer2);

  @HostListener('window:scroll')
  onWindowScroll() {
    if (window.scrollY > 0) {
      this.renderer.addClass(this.el.nativeElement, 'shadow-lg');
      this.renderer.addClass(this.el.nativeElement, 'transition-shadow');
      this.renderer.addClass(this.el.nativeElement, 'duration-300');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'shadow-lg');
    }
  }
}

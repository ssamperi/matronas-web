import { Directive, ElementRef, HostListener, inject, Renderer2, signal } from '@angular/core';

@Directive({
  selector: '[scrollShadowDirective]',
  standalone: true,
})
export class ScrollShadowDirective { 

  private el = inject(ElementRef);
  private renderer = inject(Renderer2);
  private lastScrollPosition = signal<number>(0);

  constructor() {
    // Add transition classes by default
    this.renderer.addClass(this.el.nativeElement, 'transition-all');
    this.renderer.addClass(this.el.nativeElement, 'duration-500');
    this.renderer.addClass(this.el.nativeElement, 'ease-in-out');
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    const currentScroll = window.scrollY;

    if (currentScroll > 0) {
      this.renderer.addClass(this.el.nativeElement, 'shadow-lg');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'shadow-lg');
    }

    if (currentScroll > this.lastScrollPosition() && currentScroll > 100) {
      this.renderer.addClass(this.el.nativeElement, '-translate-y-full');
    } else {
      this.renderer.removeClass(this.el.nativeElement, '-translate-y-full');
    }

      this.lastScrollPosition.set(currentScroll);
    }
}

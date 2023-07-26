import { Injectable, Renderer2, RendererFactory2, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private renderer: Renderer2;
  theme = signal<string>('');

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  load() {
    const lsTheme = localStorage.getItem('theme');
    lsTheme != undefined ? this.theme.set(lsTheme) : this.setTheme('dark');
    this.renderer.addClass(document.body, this.theme());
  }

  update(theme: string) {
    this.setTheme(theme);
    this.renderer.removeClass(document.body, (this.theme() === 'dark' ? 'light' : 'dark'));
    this.renderer.addClass(document.body, theme);
  }

  private setTheme(theme: string) {
    this.theme.set(theme);
    localStorage.setItem('theme', theme);
  }
}
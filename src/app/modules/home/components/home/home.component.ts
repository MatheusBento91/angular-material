import { MediaMatcher } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ThemeService } from 'src/app/modules/shared/services/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  fillerNav = Array.from({ length: 10 }, (_, i) => `Nav Item ${i + 1}`);

  currentTheme = signal<string>('');
  mobileQuery!: MediaQueryList;
  currentLanguage!: string;
  srcImg: string = '';

  constructor(
    private media: MediaMatcher,
    private translate: TranslateService,
    private themeService: ThemeService
  ) { }

  ngOnInit(): void {
    this.mobileQuery = this.media.matchMedia('(max-width: 820px)');
    this.currentTheme = this.themeService.theme;
    this.currentLanguage = this.translate.currentLang;
    this.srcImg = `assets/img/flag-${this.currentLanguage}.png`;

    this.translate.onLangChange.subscribe((currentLang) => {
      this.currentLanguage = currentLang.lang;
      this.srcImg = `assets/img/flag-${this.currentLanguage}.png`;
    });
  }

  setLanguage(lang: string): void {
    this.translate.use(lang);
  }

  setTheme(theme: string) {
    this.themeService.update(theme);
  }

  ngOnDestroy(): void {
    this.translate.onLangChange.unsubscribe();
  }
}

import { Component, Inject, OnDestroy, OnInit, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ThemeService } from 'src/app/modules/shared/services/theme.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit, OnDestroy {
  currentTheme = signal<string>('');
  currentLanguage!: string;
  srcImg: string = '';

  constructor(
    private translate: TranslateService,
    private themeService: ThemeService
  ) { }

  ngOnInit(): void {
    this.currentTheme = this.themeService.theme;
    this.currentLanguage = this.translate.currentLang;
    this.srcImg = `assets/img/flag-${this.currentLanguage}.png`;

    this.translate.onLangChange.subscribe((currentLang) => {
      this.currentLanguage = currentLang.lang;
      this.srcImg = `assets/img/flag-${this.currentLanguage}.png`;
    });
  }

  setTheme(theme: string) {
    this.themeService.update(theme);
  }

  setLanguage(lang: string): void {
    this.translate.use(lang);
  }

  ngOnDestroy(): void {
    this.translate.onLangChange.unsubscribe();

  }

}

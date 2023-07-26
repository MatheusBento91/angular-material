import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ThemeService } from './modules/shared/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(
    private translate: TranslateService,
    private themeService: ThemeService
  ) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
    this.themeService.load();
  }

}

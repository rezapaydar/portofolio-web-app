import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user!: { firstName: string; lastName: string; };
  welcome!: string;
  usernameLabel!: string;
  passwordLabel!: string;

  deflang !: any ;


  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'fa']);
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit() {
    // hardcoded example
    this.user = { firstName: 'Sammy', lastName: 'Shark' };

    // synchronous. Also interpolate the 'firstName' parameter with a value.
    this.welcome = this.translate.instant('welcomeMessage', { firstName: this.user.firstName });

    // asynchronous - gets translations then completes.
    this.translate.get(['login.username', 'login.password'])
      .subscribe(translations => {
        this.usernameLabel = translations['login.username'];
        this.passwordLabel = translations['login.password'];
      });
      
      this.deflang = localStorage.getItem('language');
      if (this.deflang) {
        this.translate.use(this.deflang);
      }
  }

  useLanguage(language: string): void {
    localStorage.setItem('language',language)
    this.translate.use(language);
  }

}

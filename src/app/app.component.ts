import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private route: Router) {
  }

  onLogin() {
    this.route.navigate(['user-login']);
  }

  onRegister() {
    this.route.navigate(['user-register']);
  }

  onQuestionnaire() {
    this.route.navigate(['questionnaire']);
  }
}

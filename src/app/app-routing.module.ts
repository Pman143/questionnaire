import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserLoginComponent} from './components/user-login/user-login.component';
import {UserRegistrationComponent} from './components/user-registration/user-registration.component';
import {QuestionnaireComponent} from './components/questionnaire/questionnaire.component';

const routes: Routes = [
  {path: '', redirectTo: 'user-login', pathMatch: 'full'},
  {path: 'user-login', component: UserLoginComponent},
  {path: 'user-register', component: UserRegistrationComponent},
  {path: 'questionnaire', component: QuestionnaireComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {
}

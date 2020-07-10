import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  hide = true;
  userLoginForm: FormGroup;

  constructor(private fb: FormBuilder, private route: Router) {
  }

  ngOnInit(): void {
    this.userLoginForm = this.fb.group({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  onSubmitForm(userLoginForm: FormGroup) {
    console.log(userLoginForm.value);
    this.route.navigate(['questionnaire']);
  }
}

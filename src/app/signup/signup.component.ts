import { Component, OnInit } from '@angular/core';
import {User} from '../models/user';
import {AuthService} from '../services/auth/auth.service';
import {Router} from '@angular/router';
import {SignupResponse} from '../models/signup_response';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(
    private authService : AuthService,
    private router:Router
  ) {}

  ngOnInit() {
  }

  user  = new User(0,"firstname","lastname","abc@gmail.com","pass123"); //same object gets filled on success call
  signup_response : SignupResponse;
  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log(this.user);
    this.authService.signup(this.user).then(signup_response => {
      this.signup_response=signup_response;
      console.log(this.signup_response);
      this.router.navigate(['/']);
    });
  }

}

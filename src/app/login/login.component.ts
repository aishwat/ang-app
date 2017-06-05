import { Component, OnInit } from '@angular/core';
import {User} from '../models/user';
import {AuthService} from '../services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService : AuthService,
    private router:Router
  ) {}

  ngOnInit() {
  }
  user  = new User(0,"","","abc@gmail.com","pass123"); //same object gets filled on success call
  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log(this.user);
    this.authService.login(this.user.email,this.user.password).then(user => {
      this.user=user;
      console.log(this.user);
      this.router.navigate(['/home']);
    });
  }
}

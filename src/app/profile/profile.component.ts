import { Component, OnInit } from '@angular/core';
import {User} from '../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  user  = new User(0,"firstname","lastname","abc@gmail.com",""); //same object gets filled on success call
  submitted = false;

  onSubmit() {
  //   this.submitted = true;
  //   console.log(this.user);
  //   this.authService.signup(this.user).then(signup_response => {
  //     this.signup_response=signup_response;
  //     console.log(this.signup_response);
  //     this.router.navigate(['/']);
  //   });
  }
}

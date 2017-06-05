import { Component,Input, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-landing',
  templateUrl: './header-landing.component.html',
  styleUrls: ['./header-landing.component.css']
})
export class HeaderLandingComponent implements OnInit {
  @Output() toggle_login_clicked = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }
  @Input() showLogin:Boolean;

}

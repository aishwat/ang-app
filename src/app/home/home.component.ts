import { Component, OnInit } from '@angular/core';
import {User} from '../models/user';
import {PracticeCategories} from '../mock/practice-categories';
import {Category} from '../models/category';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user  = new User(0,"Frank","Underwood","abc@gmail.com","");
  practice_categories:Category[] = PracticeCategories;

  selectedCategory:string;
  onSelect(category:string):void{
    if(this.selectedCategory == category)
        this.selectedCategory=null;
    else
        this.selectedCategory = category;
  }

  constructor() { }
  ngOnInit() {
  }
  //expect user
  //expect categories
}

import { Component, OnInit } from '@angular/core';
import {User} from '../models/user';
import {PracticeCategories} from '../mock/practice-categories';
import {Category} from '../models/category';
import {Subcategory} from '../models/subcategory';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user  = new User(0,"Frank","Underwood","abc@gmail.com","");
  practice_categories:Category[] = PracticeCategories;

  selectedCategory:string;
  selectedSubcategory:Subcategory = PracticeCategories[0].subcategories[0];//for test

  onSelectCategory(category:string):void{
    if(this.selectedCategory == category)
        this.selectedCategory=null;
    else
        this.selectedCategory = category;
  }
  onSelectSubcategory(subcategory:Subcategory):void{
    this.selectedSubcategory = subcategory;
    console.log(this.selectedSubcategory);
  }

  constructor() { }
  ngOnInit() {
  }
  //expect user
  //expect categories
}

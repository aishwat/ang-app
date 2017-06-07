import { Component, OnInit, Injectable } from '@angular/core';
import {User} from '../models/user';
import {PracticeCategories} from '../mock/practice-categories';
import {Category} from '../models/category';
import {Subcategory} from '../models/subcategory';
import {Router} from '@angular/router';

@Injectable()
export class SubcategoryService {
  subcategory:Subcategory;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers :[SubcategoryService]
})


export class HomeComponent implements OnInit {

  user  = new User(0,"Frank","Underwood","abc@gmail.com","");
  practice_categories:Category[] = PracticeCategories;

  selectedCategory:string;
  selectedSubcategory:Subcategory;// = PracticeCategories[0].subcategories[0];//for test

  onSelectCategory(category:string):void{
    if(this.selectedCategory == category)
        this.selectedCategory=null;
    else
        this.selectedCategory = category;
  }
  onSelectSubcategory(subcategory:Subcategory):void{
    this.selectedSubcategory = subcategory;
    this.subcategoryService.subcategory = subcategory;
    this.router.navigate(['/home/question']);
    console.log(this.selectedSubcategory);
  }
  navigateToReport():void{
    this.router.navigate(['/home/report']);
  }
  navigateToProfile():void{
    this.router.navigate(['/home/profile']);
  }

  constructor(
    private router: Router,
    private subcategoryService:SubcategoryService
  ){}
  ngOnInit() {
  }
  //expect user
  //expect categories
}

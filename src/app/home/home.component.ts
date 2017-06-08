import { Component, OnInit, Injectable, OnDestroy } from '@angular/core';
import {User} from '../models/user';
import {PracticeSet1} from '../mock/practice-set-1';
import {Category} from '../models/category';
import {Categories} from '../models/categories';
import {Subcategory} from '../models/subcategory';
import {Router} from '@angular/router';
import {CategoriesService} from '../services/categories.service';

@Injectable()
export class SubcategoryService {
  subcategory:Subcategory;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers :[SubcategoryService,CategoriesService]
})


export class HomeComponent implements OnInit,OnDestroy {

  user  = new User(0,"Frank","Underwood","abc@gmail.com","");

  categories:Category[] ;// = this.categoriesService.getCategories().category_list;

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
  navigateToHome():void{
    this.router.navigate(['/home/selection']);
  }

  constructor(
    private router: Router,
    private subcategoryService:SubcategoryService,
    private categoriesService:CategoriesService
  ){}

  subscription: any;
  ngOnInit() {
    this.subscription = this.categoriesService.getCategoriesChangeEmitter()
      .subscribe(categories => {
        this.categories = categories.category_list;
      });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  //expect user
  //expect categories
}

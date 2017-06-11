import { Component, OnInit ,Output, EventEmitter} from '@angular/core';
import {CategoriesList} from '../models/categories-list';
import {Categories} from '../models/categories';
import {PracticeCategories} from '../mock/categories-list';
import {TestCategories} from '../mock/categories-list';
import {PaidTestCategories} from '../mock/categories-list';
import {CategoriesService} from '../services/categories.service';

@Component({
  selector: 'app-category-selection',
  templateUrl: './category-selection.component.html',
  styleUrls: ['./category-selection.component.css'],
  providers:[]
})
export class CategorySelectionComponent implements OnInit {
  practice_categories:CategoriesList = PracticeCategories;
  test_categories:CategoriesList = TestCategories;
  paid_test_categories:CategoriesList = PaidTestCategories;
  selected_categories:Categories;

  categories_list_clicked(categories:Categories):void{
    this.showPayCard = false;
    this.selected_categories = categories;
    this.categoriesService.emitCategoriesChangeEvent(categories);
  }

  paid_test_categories_list_clicked(categories:Categories):void{
    this.selected_categories = categories;
    this.showPayCard = true;
    this.categoriesService.emitCategoriesChangeEvent(categories);
  }
  showPayCard : boolean = false;
  constructor(
    private  categoriesService:CategoriesService
  ){}

  ngOnInit() {
  }

  //expects categories-list
}

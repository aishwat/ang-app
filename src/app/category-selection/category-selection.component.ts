import { Component, OnInit ,Output, EventEmitter} from '@angular/core';
import {CategoriesList} from '../models/categories-list';
import {Categories} from '../models/categories';
import {PracticeCategories} from '../mock/categories-list';
import {TestCategories} from '../mock/categories-list';
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

  categories_list_clicked(categories:Categories):void{
    this.categoriesService.emitCategoriesChangeEvent(categories);
  }

  constructor(
    private  categoriesService:CategoriesService
  ){}

  ngOnInit() {
  }

  //expects categories-list
}

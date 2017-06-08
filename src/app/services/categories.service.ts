import { Injectable,EventEmitter } from '@angular/core';
import {Categories} from'../models/categories';
import {PracticeSet1} from '../mock/practice-set-1';
import {TestBankPO} from '../mock/test-bank-po';

@Injectable()
export class CategoriesService {
  categories:Categories = PracticeSet1;

  emitCategoriesChangeEvent(categories){
    this.categoriesChange.emit(categories);
  }
  getCategoriesChangeEmitter() {
    return this.categoriesChange;
  }
  categoriesChange: EventEmitter<Categories> = new EventEmitter();
}

import { Component, OnInit,Input } from '@angular/core';
import {Subcategory} from '../models/subcategory';
import {QuestionComponent} from '../question/question.component';
import {MdSnackBar,MdSnackBarConfig} from '@angular/material';
import {SubcategoryService} from '../home/home.component';

@Component({
  selector: 'app-questions-container',
  templateUrl: './questions-container.component.html',
  styleUrls: ['./questions-container.component.css']
})
export class QuestionsContainerComponent implements OnInit {

  constructor(
    public snackBar: MdSnackBar,
    private  subcategoryService:SubcategoryService
  ) {
    console.log("in constructor");
    console.log(subcategoryService.subcategory);
  }

  subcategory: Subcategory;
  ngOnInit() {
    this.subcategory=this.subcategoryService.subcategory;
  }

  showAnswer():void{
    this.subcategory.questions[this.selectedTab].showanswer=true;
  }
  selectedTab = 0;
  next():void{
    if(this.selectedTab+1 < this.subcategory.questions.length)
      this.selectedTab = this.selectedTab+1;
  }
  before():void{
    if(this.selectedTab-1 >= 0)
      this.selectedTab = this.selectedTab-1;
  }

  markforreview():void{
    this.subcategory.questions[this.selectedTab].markedforreview = !  this.subcategory.questions[this.selectedTab].markedforreview;
    this.open_snack_bar(this.subcategory.questions[this.selectedTab].markedforreview ?"Marked For Review" : "Unmarked From Review");
  }

  open_snack_bar(message: string) {
    let config = new MdSnackBarConfig();
    config.duration = 700;
    this.snackBar.open(message,null, config);
  }
}

import { Component, OnInit,Input } from '@angular/core';
import {Question} from '../models/question';
import {Option} from '../models/option';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() question: Question;

  selectedOption:Option;
  optionClicked(option:Option):void{
    this.selectedOption = option;
  }

}

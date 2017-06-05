import {Category} from '../models/Category';
import {Subcategory} from '../models/Subcategory';
import {Question} from '../models/Question';
import {QUESTIONS} from './questions';

export const TestCategories: Category[] =[
  {
    category_id:"1",
    category:"UPSC TEST 1",
    subcategories:[
      {subcategory_id:"1",subcategory:'General Intelligence and Reasoning',questions:QUESTIONS},
      {subcategory_id:"2",subcategory:'General Knowledge And Awareness',questions:QUESTIONS},
      {subcategory_id:"3",subcategory:'Quantitative Aptitide',questions:QUESTIONS},
      {subcategory_id:"4",subcategory:'English',questions:QUESTIONS}
    ]
  },
  {
    category_id:"2",
    category:"Railways RRB",
    subcategories:[
      {subcategory_id:"1",subcategory:'Complete Section',questions:QUESTIONS}
    ]
  },
  {
    category_id:"3",
    category:"Bank PO Test",
    subcategories:[
      {subcategory_id:"1",subcategory:'Reasoning',questions:QUESTIONS},
      {subcategory_id:"2",subcategory:'Quantitative',questions:QUESTIONS},
      {subcategory_id:"3",subcategory:'General Awareness',questions:QUESTIONS},
      {subcategory_id:"4",subcategory:'English Language',questions:QUESTIONS}
    ]
  }
]

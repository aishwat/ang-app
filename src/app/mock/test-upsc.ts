import {Categories} from '../models/categories';
import {Category} from '../models/Category';
import {Subcategory} from '../models/Subcategory';
import {Question} from '../models/Question';
import {QUESTIONS} from './questions';

export const TestUPSC: Categories =
{
  category_list_id:"3",
  category_list_name:"Test UPSC",
  category_list:
[
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
    category:"UPSC TEST 2",
    subcategories:[
      {subcategory_id:"1",subcategory:'General Intelligence and Reasoning',questions:QUESTIONS},
      {subcategory_id:"2",subcategory:'General Knowledge And Awareness',questions:QUESTIONS},
      {subcategory_id:"3",subcategory:'Quantitative Aptitide',questions:QUESTIONS},
      {subcategory_id:"4",subcategory:'English',questions:QUESTIONS}
    ]
  },
  {
    category_id:"3",
    category:"UPSC TEST 3",
    subcategories:[
      {subcategory_id:"1",subcategory:'General Intelligence and Reasoning',questions:QUESTIONS},
      {subcategory_id:"2",subcategory:'General Knowledge And Awareness',questions:QUESTIONS},
      {subcategory_id:"3",subcategory:'Quantitative Aptitide',questions:QUESTIONS},
      {subcategory_id:"4",subcategory:'English',questions:QUESTIONS}
    ]
  },
  {
    category_id:"4",
    category:"UPSC TEST 4",
    subcategories:[
      {subcategory_id:"1",subcategory:'General Intelligence and Reasoning',questions:QUESTIONS},
      {subcategory_id:"2",subcategory:'General Knowledge And Awareness',questions:QUESTIONS},
      {subcategory_id:"3",subcategory:'Quantitative Aptitide',questions:QUESTIONS},
      {subcategory_id:"4",subcategory:'English',questions:QUESTIONS}
    ]
  }
]
}

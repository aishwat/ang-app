import {Categories} from '../models/categories';
import {Category} from '../models/Category';
import {Subcategory} from '../models/Subcategory';
import {Question} from '../models/Question';
import {QUESTIONS} from './questions';

export const TestUPSCPaid: Categories =
{
  category_list_id:"4",
  category_list_name:"Test UPSC Paid",
  category_list:
  [
    {
      category_id:"1",
      category:"UPSC TEST",
      subcategories:[
        {subcategory_id:"1",subcategory:'General Intelligence and Reasoning',questions:QUESTIONS},
        {subcategory_id:"2",subcategory:'General Knowledge And Awareness',questions:QUESTIONS},
        {subcategory_id:"3",subcategory:'Quantitative Aptitide',questions:QUESTIONS},
        {subcategory_id:"4",subcategory:'English',questions:QUESTIONS}
      ]
    }
  ],
  category_list_price:"2000"
}
// this.TestUPSCPaid.category_list_price="2000";

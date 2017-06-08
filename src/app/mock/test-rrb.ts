import {Categories} from '../models/categories';
import {Category} from '../models/Category';
import {Subcategory} from '../models/Subcategory';
import {Question} from '../models/Question';
import {QUESTIONS} from './questions';

export const TestRRB: Categories = {
  category_list_id:"2",
  category_list_name:"Test RRB",
  category_list:[

    {
      category_id:"1",
      category:"Railways RRB 2014",
      subcategories:[
        {subcategory_id:"1",subcategory:'Complete Section',questions:QUESTIONS}
      ]
    },
    {
      category_id:"2",
      category:"Railways RRB 2015",
      subcategories:[
        {subcategory_id:"1",subcategory:'Complete Section',questions:QUESTIONS}
      ]
    },
    {
      category_id:"3",
      category:"Railways RRB 2016",
      subcategories:[
        {subcategory_id:"1",subcategory:'Complete Section',questions:QUESTIONS}
      ]
    },
    {
      category_id:"4",
      category:"Railways RRB 2017",
      subcategories:[
        {subcategory_id:"1",subcategory:'Complete Section',questions:QUESTIONS}
      ]
    }
  ]

}

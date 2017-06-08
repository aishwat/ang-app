import {Categories} from '../models/categories';
import {Category} from '../models/Category';
import {Subcategory} from '../models/Subcategory';
import {Question} from '../models/Question';
import {QUESTIONS} from './questions';

export const TestBankPO: Categories = {
  category_list_id:"1",
  category_list_name:"Test Bank PO",
  category_list:[
    {
      category_id:"1",
      category:"Bank PO Test 2015",
      subcategories:[
        {subcategory_id:"1",subcategory:'Reasoning',questions:QUESTIONS},
        {subcategory_id:"2",subcategory:'Quantitative',questions:QUESTIONS},
        {subcategory_id:"3",subcategory:'General Awareness',questions:QUESTIONS},
        {subcategory_id:"4",subcategory:'English Language',questions:QUESTIONS}
      ]
    },
    {
      category_id:"2",
      category:"Bank PO Test 2016",
      subcategories:[
        {subcategory_id:"1",subcategory:'Reasoning',questions:QUESTIONS},
        {subcategory_id:"2",subcategory:'Quantitative',questions:QUESTIONS},
        {subcategory_id:"3",subcategory:'General Awareness',questions:QUESTIONS},
        {subcategory_id:"4",subcategory:'English Language',questions:QUESTIONS}
      ]
    },
    {
      category_id:"3",
      category:"Bank PO Test 2017",
      subcategories:[
        {subcategory_id:"1",subcategory:'Reasoning',questions:QUESTIONS},
        {subcategory_id:"2",subcategory:'Quantitative',questions:QUESTIONS},
        {subcategory_id:"3",subcategory:'General Awareness',questions:QUESTIONS},
        {subcategory_id:"4",subcategory:'English Language',questions:QUESTIONS}
      ]
    },
    {
      category_id:"3",
      category:"Bank PO Test Model",
      subcategories:[
        {subcategory_id:"1",subcategory:'Reasoning',questions:QUESTIONS},
        {subcategory_id:"2",subcategory:'Quantitative',questions:QUESTIONS},
        {subcategory_id:"3",subcategory:'General Awareness',questions:QUESTIONS},
        {subcategory_id:"4",subcategory:'English Language',questions:QUESTIONS}
      ]
    }
  ]

}

import {Categories} from '../models/Categories';
import {Category} from '../models/Category';
import {Subcategory} from '../models/Subcategory';
import {Question} from '../models/Question';
import {QUESTIONS} from './questions';

export const PracticeSet1: Categories = {
  category_list_id:"1",
  category_list_name:"Practice Set 1",
  category_list:[
    {
      category_id:"1",
      category:"English",
      subcategories:[
        {subcategory_id:"1",subcategory:'Error Spotting Grammar',questions:QUESTIONS},
        {subcategory_id:"2",subcategory:'Phrase Replacement',questions:QUESTIONS},
        {subcategory_id:"3",subcategory:'Direct And Indirect Speech',questions:QUESTIONS},
        {subcategory_id:"4",subcategory:'Active and Passive Voice',questions:QUESTIONS},
        {subcategory_id:"5",subcategory:'Spellings',questions:QUESTIONS},
        {subcategory_id:"6",subcategory:'Synonyms And Antonyms',questions:QUESTIONS},
        {subcategory_id:"7",subcategory:'Vocab',questions:QUESTIONS}
      ]
    },
    {
      category_id:"2",
      category:"Quantitative Aptitude",
      subcategories:[
        {subcategory_id:"1",subcategory:'Simplification',questions:QUESTIONS},
        {subcategory_id:"2",subcategory:'Average',questions:QUESTIONS},
        {subcategory_id:"3",subcategory:'Percantage',questions:QUESTIONS},
        {subcategory_id:"4",subcategory:'Ratio And Proportion',questions:QUESTIONS},
        {subcategory_id:"5",subcategory:'Mixture Problems',questions:QUESTIONS},
        {subcategory_id:"6",subcategory:'Algebra',questions:QUESTIONS},
        {subcategory_id:"7",subcategory:'Profit And Loss',questions:QUESTIONS},
        {subcategory_id:"8",subcategory:'Speed And Time',questions:QUESTIONS},
        {subcategory_id:"9",subcategory:'Geometry',questions:QUESTIONS},
        {subcategory_id:"10",subcategory:'Number Series',questions:QUESTIONS}
      ]
    },
    {
      category_id:"3",
      category:"Data Interpretation",
      subcategories:[
        {subcategory_id:"1",subcategory:'Tabulation',questions:QUESTIONS},
        {subcategory_id:"2",subcategory:'Bar Graph',questions:QUESTIONS},
        {subcategory_id:"3",subcategory:'Line Graph',questions:QUESTIONS},
        {subcategory_id:"4",subcategory:'Pie Chart',questions:QUESTIONS},
        {subcategory_id:"5",subcategory:'Miscellaneous',questions:QUESTIONS}
      ]
    },
    {
      category_id:"4",
      category:"Logical Reasoning",
      subcategories:[
        {subcategory_id:"1",subcategory:'Analogy',questions:QUESTIONS},
        {subcategory_id:"2",subcategory:'Classification',questions:QUESTIONS},
        {subcategory_id:"3",subcategory:'Series',questions:QUESTIONS},
        {subcategory_id:"4",subcategory:'Coding Decoding',questions:QUESTIONS},
        {subcategory_id:"5",subcategory:'Venn Diagram',questions:QUESTIONS}
      ]
    },
    {
      category_id:"5",
      category:"Verbal Reasoning",
      subcategories:[
        {subcategory_id:"1",subcategory:'Statements And Conclusion',questions:QUESTIONS},
        {subcategory_id:"2",subcategory:'Statements And Assumptions',questions:QUESTIONS},
        {subcategory_id:"3",subcategory:'Statements And Inferences',questions:QUESTIONS}
      ]
    }
  ]
}

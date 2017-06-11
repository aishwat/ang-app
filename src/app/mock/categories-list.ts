import {CategoriesList} from '../models/Categories-list';
import {Category} from '../models/Category';
import {PracticeSet1} from '../mock/practice-set-1';
import {PracticeSet2} from '../mock/practice-set-2';
import {PracticeSet3} from '../mock/practice-set-3';
import {TestBankPO} from '../mock/test-bank-po';
import {TestRRB} from '../mock/test-rrb';
import {TestUPSC} from '../mock/test-upsc';
import {TestUPSCPaid} from '../mock/test-upsc-paid';


export const PracticeCategories: CategoriesList = {
      categories_list_id:"1",
      categories_list_name:"Practice",
      categories_list:[PracticeSet1,PracticeSet2,PracticeSet3]
}

export const TestCategories: CategoriesList = {
    categories_list_id:"2",
    categories_list_name : "Test",
    categories_list : [TestBankPO,TestRRB,TestUPSC]
}

export const PaidTestCategories: CategoriesList = {
    categories_list_id:"3",
    categories_list_name : "Paid Tests",
    categories_list : [TestUPSCPaid]
}

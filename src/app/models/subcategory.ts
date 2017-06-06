import {Question} from './question';
export class Subcategory {
  constructor(
    public subcategory_id : string,
    public subcategory:string,
    public questions:Question[]
  ){}
}

import {Question} from './question';
export class Subcategory {
  constructor(
    public subcategory_id : string,
    public subcategory:string,
    public questions:Question[]
    // public skipped:string,
    // public unseen: string,
    // public attempted:string,
    // public markedforreview:string,
    // public correct:string,
    // public incorrect:string
  ){}
}

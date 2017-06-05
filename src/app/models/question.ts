import {Option} from './option';
export class Question {
  constructor(
    public question_id : string,
    public question:string,
    public options : Option[],
    public ans : string
  ){}
}

import {Option} from './option';
export class Question {
  constructor(
    public question_id : string,
    public question:string,
    public options : Option[],
    public ans : string,
    // public skipped:string,
    // public unseen: string,
    // public attempted:string,
    public markedforreview? :boolean,
    public showanswer? :boolean
    // public correct:string,
    // public incorrect:string
  ){}
}

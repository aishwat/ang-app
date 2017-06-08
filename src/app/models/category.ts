import {Subcategory} from './subcategory';

export class Category {
  constructor(
    public category_id : string,
    public category: string,
    public subcategories: Subcategory[],
  ) {}
}

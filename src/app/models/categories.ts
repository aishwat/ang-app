import {Category} from './category';

export class Categories {
  constructor(
    public category_list_id : string,
    public category_list_name: string,
    public category_list: Category[],
  ) {}
}

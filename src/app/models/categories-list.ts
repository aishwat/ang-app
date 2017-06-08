import {Categories} from './Categories';

export class CategoriesList {
  constructor(
    public categories_list_id : string,
    public categories_list_name: string,
    public categories_list:Categories[]
  ) {}
}

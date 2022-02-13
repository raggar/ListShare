import { IList } from "./IList";

export interface ICategory {
  category_name: string;
  category_lists?: IList[];
}

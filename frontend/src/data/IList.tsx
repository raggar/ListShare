import { IListItem } from "./IListItem";

export interface IList {
  list_name: string;
  list_items?: IListItem[];
}

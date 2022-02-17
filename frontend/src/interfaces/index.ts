export interface IListItem {
  item_name: string;
  item_link?: string;
}

export interface ICategory {
  category_name: string;
  category_lists?: IList[];
}

export interface IList {
  list_name: string;
  list_items?: IListItem[];
}

import api from "./core";

export interface LinkItem {
  title: string;
  description: string;
  image: string;
}

export function getTags(url: string) {
  return api
    .get<LinkItem>("/scrape", {
      params: {
        url: url,
      },
    })
    .then((response) => response.data);
}

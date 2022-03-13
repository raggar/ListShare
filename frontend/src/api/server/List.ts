import { useQuery } from "react-query";
import api from "./core";

export interface List {
  name: string;
  shareLink: string;
  comment: string;
  category: string;
}

export function useLists() {
  return useQuery("lists", () =>
    api.get<List[]>("/api/users/all").then((response) => response.data)
  );
}

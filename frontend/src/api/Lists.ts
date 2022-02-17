import api from "./core";
import { useQuery, useMutation } from "react-query";

export function useLists() {
  return useQuery(["lists"], () =>
    api.get("/api/users/all").then((response) => response.data)
  );
}

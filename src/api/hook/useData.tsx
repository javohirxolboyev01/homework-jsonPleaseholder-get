import { useQuery } from "@tanstack/react-query";
import { api } from "..";

export const useData = () => {
  const getPhotos = () =>
    useQuery({
      queryKey: ["photos"],
      queryFn: () => api.get("/photos"),
    });
  const getTodos = () =>
    useQuery({
      queryKey: ["todos"],
      queryFn: () => api.get("/todos"),
    });
  const getUsers = () =>
    useQuery({
      queryKey: ["users"],
      queryFn: () => api.get("/users"),
    });

  return { getTodos, getPhotos, getUsers };
};

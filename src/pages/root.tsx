import React, { lazy } from "react";
import { useRoutes } from "react-router-dom";
import Layout from "../components/layout/Layout";
const Posts = lazy(() => import("./Posts/Posts"));
const Comments = lazy(() => import("./Comments/Comments"));
const Albums = lazy(() => import("./Albums/Albums"));
const Photos = lazy(() => import("./Photos/Photos"));
const Todos = lazy(() => import("./Todos/Todos"));
const Users = lazy(() => import("./Users/Users"));
const WishlistPage = lazy(() => import("./WishlistPage/WishlistPage"));

const Root = () => {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/posts", element: <Posts /> },
        { path: "/comments", element: <Comments /> },
        { path: "/albums", element: <Albums /> },
        { path: "/photos", element: <Photos /> },
        { path: "/todos", element: <Todos /> },
        { path: "/users", element: <Users /> },
        { path: "/wishlist", element: <WishlistPage /> },
      ],
    },
  ]);
};

export default React.memo(Root);

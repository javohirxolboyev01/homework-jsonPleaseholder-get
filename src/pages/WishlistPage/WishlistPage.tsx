import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../components/redux";
import PostosItem from "../../components/posts/PostosItem";
import CommentsItem from "../../components/comments/CommentsItem";
import AlbumsItem from "../../components/albums/AlbumsItem";
import PhotosItem from "../../components/photos/PhotosItem";
import TodosItem from "../../components/todos/TodosItem";
import UserItem from "../../components/users/UserItem";

const WishlistPage = () => {
  const wishAlbums = useSelector((state: RootState) => state.albums.value);
  const wishComments = useSelector((state: RootState) => state.comments.value);
  const wishPhotos = useSelector((state: RootState) => state.photos.value);
  const wishPost = useSelector((state: RootState) => state.postos.value);
  const wishTodos = useSelector((state: RootState) => state.todos.value);
  const wishUsers = useSelector((state: RootState) => state.users.value);

  return (
    <div>
      <div className="p-6 space-y-6">
        <div className="bg-white border border-gray-200 rounded-xl shadow p-4">
          <h2 className="text-xl font-semibold mb-4">Posts</h2>
          <PostosItem data={wishPost} />
        </div>

        <div className="bg-white border border-gray-200 rounded-xl shadow p-4">
          <h2 className="text-xl font-semibold mb-4">Comments</h2>
          <CommentsItem data={wishComments} />
        </div>

        <div className="bg-white border border-gray-200 rounded-xl shadow p-4">
          <h2 className="text-xl font-semibold mb-4">Albums</h2>
          <AlbumsItem data={wishAlbums} />
        </div>

        <div className="bg-white border border-gray-200 rounded-xl shadow p-4">
          <h2 className="text-xl font-semibold mb-4">Photos</h2>
          <PhotosItem data={wishPhotos} />
        </div>

        <div className="bg-white border border-gray-200 rounded-xl shadow p-4">
          <h2 className="text-xl font-semibold mb-4">Todos</h2>
          <TodosItem data={wishTodos} />
        </div>

        <div className="bg-white border border-gray-200 rounded-xl shadow p-4">
          <h2 className="text-xl font-semibold mb-4">Users</h2>
          <UserItem data={wishUsers} />
        </div>
      </div>
    </div>
  );
};

export default React.memo(WishlistPage);

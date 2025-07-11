import React, { type FC } from "react";
import type { IPosts } from "../../types";
import { useDispatch } from "react-redux";
import { toggleWishlist } from "../redux/feature/postsSlice";

interface Props {
  data: IPosts[];
}

const PostosItem: FC<Props> = ({ data }) => {
  const dispatch = useDispatch();
  if (!Array.isArray(data)) return <p>No posts available.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {data.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-xl border border-gray-200 shadow-md p-5 hover:shadow-lg transition duration-300"
        >
          <h3 className="text-xl font-semibold text-blue-800 mb-2">
            {item.title}
          </h3>
          <p className="text-gray-700 text-sm mb-2">{item.body}</p>
          <p className="text-xs text-gray-500">User ID: {item.userId}</p>
          <button
            onClick={() => dispatch(toggleWishlist(item))}
            className="bg-gray-500 py-1 px-3 rounded-[10px] mt-5 text-white"
          >
            Liked
          </button>
        </div>
      ))}
    </div>
  );
};

export default React.memo(PostosItem);

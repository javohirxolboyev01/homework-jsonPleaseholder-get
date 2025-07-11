import React, { type FC } from "react";
import type { ICommets } from "../../types";
import { useDispatch } from "react-redux";
import { toggleWishlist } from "../redux/feature/commentsSlice";

interface Props {
  data: ICommets[];
}

const CommentsItem: FC<Props> = ({ data }) => {
  const dispatch =useDispatch()
  if (!Array.isArray(data)) return <p>No comments found.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {data.map((item) => (
        <div
          key={item.id}
          className="bg-white border border-gray-200 rounded-xl shadow-md p-5 hover:shadow-lg transition duration-300"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {item.name}
          </h3>
          <p className="text-sm text-gray-700 mb-3">{item.body}</p>
          <p className="text-xs text-gray-500 italic">{item.email}</p>
          <button
            onClick={() => dispatch(toggleWishlist(item))}
            className="bg-yellow-700 py-1 px-3 rounded-[10px] mt-5 text-white"
          >
            Liked
          </button>
        </div>
      ))}
    </div>
  );
};

export default React.memo(CommentsItem);

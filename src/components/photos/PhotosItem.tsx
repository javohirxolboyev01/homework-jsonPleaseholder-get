import React from "react";
import type { IPhotos } from "../../types";
import { useDispatch } from "react-redux";
import { toggleWishlist } from "../redux/feature/photoSlice";

interface Props {
  data: IPhotos[];
}

const PhotosItem: React.FC<Props> = ({ data }) => {
  const dispatch = useDispatch();
  if (!Array.isArray(data)) return <p>No photos to display.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {data.map((item) => (
        <div
          key={item.id}
          className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800">
              {item.title}
            </h2>
            <button
              onClick={() => dispatch(toggleWishlist(item))}
              className="bg-orange-600 py-1 px-3 rounded-[10px] mt-5 text-white"
            >
              Liked
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhotosItem;

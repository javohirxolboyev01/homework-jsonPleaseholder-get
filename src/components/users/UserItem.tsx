import React, { type FC } from "react";
import type { IUsers } from "../../types";

interface Props {
  data: IUsers[];
}

const UserItem: FC<Props> = ({ data }) => {
  if (!Array.isArray(data)) return <p>No users available.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {data.map((item) => (
        <div
          key={item.id}
          className="bg-white border border-gray-200 rounded-xl shadow-md p-5 hover:shadow-lg transition duration-300"
        >
          <h3 className="text-lg font-bold text-gray-800 mb-1">{item.name}</h3>
          <h4 className="text-sm font-medium text-gray-600 mb-2">
            @{item.username}
          </h4>
          <p className="text-sm text-blue-600 mb-1">{item.email}</p>
          <p className="text-sm text-gray-700 mb-1"> {item.phone}</p>
          <p className="text-sm text-gray-700"> {item.website}</p>
          <button className="bg-red-500 py-1 px-3 rounded-[10px] mt-5 text-white">
            Liked
          </button>
        </div>
      ))}
    </div>
  );
};

export default React.memo(UserItem);

import React, { type FC } from "react";
import type { ITodos } from "../../types";

interface Props {
  data: ITodos[];
}

const TodosItem: FC<Props> = ({ data }) => {
  if (!Array.isArray(data)) return <p>No todos found.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {data.map((item) => (
        <div
          key={item.id}
          className="bg-white border border-gray-200 rounded-xl shadow-md p-4 hover:shadow-lg transition duration-300"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {item.title}
          </h3>
          <p className="text-sm text-gray-600">User ID: {item.userId}</p>
          <button className="bg-slate-950 py-1 px-3 rounded-[10px] mt-5 text-white">
            Liked
          </button>
        </div>
      ))}
    </div>
  );
};

export default React.memo(TodosItem);

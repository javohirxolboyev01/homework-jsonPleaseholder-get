import React from "react";
import useHook from "../../api/hook/useHook";
import CommentsItem from "../../components/comments/CommentsItem";

const Comments = () => {
  const { data } = useHook("/comments");
  console.log(data);

  return (
    <div>
      <CommentsItem data={data ||[]} />
    </div>
  );
};

export default React.memo(Comments);

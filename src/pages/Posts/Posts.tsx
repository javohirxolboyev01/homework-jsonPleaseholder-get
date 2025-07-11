import React from "react";
import useHook from "../../api/hook/useHook";
import PostosItem from "../../components/posts/PostosItem";

const Posts = () => {
  const { data } = useHook("/posts");
  return (
    <div>
      <PostosItem data={data || []} />
    </div>
  );
};

export default React.memo(Posts);

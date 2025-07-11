import React from "react";
import useHook from "../../api/hook/useHook";
import AlbumsItem from "../../components/albums/AlbumsItem";

const Albums = () => {
  const { data } = useHook("/albums");
  console.log(data);

  return <div><AlbumsItem data= {data||[]}/></div>;
};

export default React.memo(Albums);

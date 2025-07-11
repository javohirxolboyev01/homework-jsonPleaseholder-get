import React from "react";
import { useData } from "../../api/hook/useData";
import PhotosItem from "../../components/photos/PhotosItem";

const Photos = () => {
  const { getPhotos } = useData();
  const { data ,  } = getPhotos();
  console.log(data);


  return (
    <div>
      <PhotosItem data={data?.data}  />
    </div>
  );
};

export default React.memo(Photos);

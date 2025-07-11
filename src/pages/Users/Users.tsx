import React from "react";
import { useData } from "../../api/hook/useData";
import UserItem from "../../components/users/UserItem";

const Users = () => {
  const {getUsers} = useData()
  const {data} = getUsers()
  console.log(data);
  
  return <div><UserItem data = {data?.data}/></div>;
};

export default React.memo(Users);

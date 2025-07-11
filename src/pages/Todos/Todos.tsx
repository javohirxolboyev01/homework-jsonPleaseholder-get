import React from "react";
import { useData } from "../../api/hook/useData";
import TodosItem from "../../components/todos/TodosItem";

const Todos = () => {
  const { getTodos } = useData();
  const { data } = getTodos();
  console.log(data);

  return <div>
    <TodosItem data = {data?.data}/>
  </div>;
};

export default React.memo(Todos);

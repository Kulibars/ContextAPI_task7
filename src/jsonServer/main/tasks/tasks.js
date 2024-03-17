import { useContext } from "react";
import { SearchTaskContext } from "../context/searchTaskContext";
import { Task } from "../task/task";

export const Tasks = () => {
  const searchTask = useContext(SearchTaskContext);
  return searchTask.map(({ id, title }) => (
    <Task key={id} id={id} title={title} />
  ));
};

import { useContext } from "react";
import { SortTasksContext } from "../context/sortTasksContext";
import { Task } from "../task/task";

export const SortTasks = () => {
  const { sortTask } = useContext(SortTasksContext);

  return sortTask.map(({ id, title }) => (
    <Task key={id} id={id} title={title} />
  ));
};

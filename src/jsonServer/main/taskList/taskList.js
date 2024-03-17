import styles from "../../styles/taskList.module.css";
import { SortTasksContext } from "../context/sortTasksContext";
import { SortTasks } from "../sortTask/sortTasks";
import { Tasks } from "../tasks/tasks";
import { useContext } from "react";

export const TaskList = () => {
  const { sortFlag } = useContext(SortTasksContext);

  return (
    <div className={styles.taskList}>
      {!sortFlag ? <Tasks /> : <SortTasks />}
    </div>
  );
};

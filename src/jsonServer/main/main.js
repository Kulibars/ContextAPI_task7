import { useEffect, useState } from "react";
import { TaskList } from "./taskList/taskList.js";
import { ControlPanel } from "./controlPanel/contlolPanel.js";
import { JsonServerContextProvider } from "./context/jsonServerContextProvider";
import { useSortTask, useSearchTask } from "../hooks";
import { readTask } from "../api";
import styles from "../styles/taskList.module.css";

export const Main = () => {
  const [sortFlag, setSortFlag] = useState(false);
  const [task, setTask] = useState([]);

  useEffect(() => {
    readTask().then((loadedTask) => setTask(loadedTask));
  }, [task]);

  const { searchTask, onSearchTaskChange } = useSearchTask(task);
  const { sortTask } = useSortTask(searchTask);

  return (
    <>
      <div className="main">
        <JsonServerContextProvider
          sortTask={sortTask}
          searchTask={searchTask}
          sortFlag={sortFlag}
        >
          <TaskList />
        </JsonServerContextProvider>

        <ControlPanel
          sortFlag={sortFlag}
          setSortFlag={setSortFlag}
          onSearchTaskChange={onSearchTaskChange}
        />
      </div>
    </>
  );
};

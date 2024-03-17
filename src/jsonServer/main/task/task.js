import { useState } from "react";
import { TaskEdit } from "../taskEdit/taskEdit";
import styles from "../../styles/taskList.module.css";

export const Task = ({ id, title }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const onTaskEdit = () => {
    setIsEditing(true);
  };

  return (
    <div key={id}>
      {isEditing ? (
        <div key={id} className={styles.task}>
          <TaskEdit
            id={id}
            title={title}
            onTaskEdit={onTaskEdit}
            newTitle={newTitle}
            setNewTitle={setNewTitle}
            setIsEditing={setIsEditing}
          />
        </div>
      ) : (
        <div key={id} className={styles.task} onClick={onTaskEdit}>
          <div>{title}</div>
        </div>
      )}
    </div>
  );
};

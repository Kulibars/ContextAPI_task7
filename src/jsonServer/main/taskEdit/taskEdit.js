import styles from "../../styles/taskList.module.css";
import { updateTask, deleteTask } from "../../api";

export const TaskEdit = ({ id, newTitle, setNewTitle, setIsEditing }) => {
  const onTitleChange = ({ target }) => {
    setNewTitle(target.value);
  };

  const onTaskRemove = () => {
    deleteTask(id);
    setIsEditing(false);
  };

  const onTaskSave = () => {
    updateTask({ id: id, title: newTitle });
    setIsEditing(false);
  };

  return (
    <div className={styles.addTask}>
      <input
        onChange={onTitleChange}
        type="text"
        value={newTitle}
        className={styles.addTaskInput}
        placeholder="Изменить"
        id={id}
      ></input>
      <button onClick={onTaskSave} id={id} className={styles.addTaskButton}>
        ✚
      </button>
      <button onClick={onTaskRemove} id={id} className={styles.bottonDelTodo}>
        Удалить
      </button>
    </div>
  );
};

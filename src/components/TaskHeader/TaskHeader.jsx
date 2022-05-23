import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = () => {
  // sample values to be replaced
  const [totalTask, setTotalTask] = React.useState(0)
  const [unCompletedTask, setUnCompletedTask] = React.useState(0)

  // NOTE: do not delete `data-cy` key value pair
  return (

    <div data-cy="task-header" className={styles.taskHeader}>
      <h1>Todo List</h1>
      <b data-cy="header-remaining-task">You have {unCompletedTask}</b>
      <b data-cy="header-total-task"> of {totalTask} tasks remaining</b>
    </div>
  );
};

export default TaskHeader;

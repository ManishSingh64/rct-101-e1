import React from "react";
import styles from "./addTask.module.css";



const AddTask = ({addTask}) => {
  // NOTE: do not delete `data-cy` key value pair
  
  const [newtask, setNewTask] = React.useState("")
  return (

    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" placeholder="add your task " value={newtask} onChange={(e) => {
        setNewTask(e.target.value)
      }}/>

      <button data-cy="add-task-button" onClick={() =>{
        if(newtask !== ""){
          addTask(newtask)
        }

        setNewTask("")
      }}>+</button>
    </div>
  );
};

export default AddTask;

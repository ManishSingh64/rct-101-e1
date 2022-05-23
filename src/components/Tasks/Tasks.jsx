import React from "react";
import styles from "./tasks.module.css";
import Task from '../Task/Task'


const Tasks = ({todos,deletetodo,data}) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
         {data.map((el)=>(
              <Task key={el.id} value ={el.text} state={el.done} deletetodo={deletetodo}/>
         ))}

         {todos.map((todo)=>(
              <Task key={todo.id} value ={todo.value}  deletetodo={deletetodo} />
         ))}

      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;

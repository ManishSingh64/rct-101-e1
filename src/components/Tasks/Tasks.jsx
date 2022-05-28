import React, { useState } from "react";
import styles from "./tasks.module.css";
import Task from '../Task/Task'


const Tasks = ({tasks,todos,deletetodo,setCheckedCount,checkedCount}) => {
  // NOTE: do not delete `data-cy` key value pair
  console.log(tasks.length)
  //  const [toggle, setToggle] = useState(0)
  return (
    <>
    
      <ul data-cy="tasks" className={styles.tasks}>
         {tasks.map((el)=>(
              <Task key={el.id} id={el.id} value ={el.text} state={el.done} deletetodo={deletetodo} setCheckedCount={setCheckedCount} checkedCount={checkedCount}/>
         ))}

      </ul>
      {/* {tasks.length === toggle ? <div data-cy="tasks-empty" className={styles.empty}>
          <h3>Empty todo</h3>
          <p>Add todo above</p>
      </div> : null} */}
      <div data-cy="tasks-empty" className={styles.empty}>
          <h3>Empty todo</h3>
          <p>Add todo above</p>
      </div>
    </>
  );
};

export default Tasks;

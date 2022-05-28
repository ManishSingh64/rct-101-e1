import React from "react";
import styles from "./task.module.css";
import Counter from '../Counter/Counter'

const Task = ({value,deletetodo,id,setCheckedCount,state,checkedCount}) => {
  // NOTE: do not delete `data-cy` key value pair

  const [checked, setChecked] = React.useState(state) 

  return (
    <li data-cy="task" className={styles.task}>
      <input  type="checkbox" data-cy="task-checkbox"  defaultChecked={checked}  onChange={() => {
        if(checked === true){
          setCheckedCount(checkedCount - 1)
          setChecked(false)
        }else{
          setCheckedCount(checkedCount + 1)
          setChecked(true)
        }
        
      }} />

      <div data-cy="task-text" style={checked === true? {textDecoration: "line-through",color:"grey"}: {textDecoration: "none"}} >
        {value}  
      </div>
      <Counter/> 
      <button data-cy="task-remove-button" onClick={()=> deletetodo(id)}>x</button>
    </li>
  );
};

export default Task;

import React from "react";
import styles from "./counter.module.css";

const Counter = () => {
  // sample value to be replaced
  const [count, setcount] = React.useState(1)
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" onClick={()=>count >1 ? setcount(count - 1) : null}>-</button>
      <span data-cy="task-counter-value">{count}</span>
      <button data-cy="task-counter-decrement-button" onClick={()=>setcount(count + 1)}>+</button>
    </div>
  );
};

export default Counter;

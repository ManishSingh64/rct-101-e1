import React from "react";
import styles from "./taskApp.module.css";
import { v4 as uuidv4 } from 'uuid';
import TaskHeader from './TaskHeader/TaskHeader';
import AddTask from './AddTask/AddTask';
import Tasks from './Tasks/Tasks';


const TaskApp = ({data}) => {  // data = [{},{},{},{akshay},{mansih}........]
  // NOTE: do not delete `data-cy` key value pair
  const [tasks, setTasks ] = React.useState(data)

  const [checkedCount, setCheckedCount] = React.useState(2)

 const addTask = (newTask) =>{
         
         setTasks([...tasks,{
           id:uuidv4(),
           text: newTask,
           done: false
         }])
 }

 const deletetodo = (id) =>{
     setTasks(tasks.filter((todo) => todo.id !== id))
 }

 
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      <TaskHeader tasks = {tasks} checkedCount={checkedCount} />
      <AddTask addTask={addTask} />
      <Tasks tasks={tasks} deletetodo={deletetodo}  setCheckedCount={setCheckedCount} checkedCount={checkedCount}/>
    </div>
  );
};

export default TaskApp;

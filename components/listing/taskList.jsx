import { useSelector } from 'react-redux'
import css from './taskList.css';

const TaskList = () => {
    const taskStore = useSelector(state => state.task);
    if (taskStore.tasks.length === 0) {
        return (<div></div>)
    }
    return (<ul className={css.responsivetable}>
        <li className={css.tableheader}>
      <div className={` ${css.center}`}>Tasks</div>

      
    </li>
        <li className={css.tableheader}>
      <div className={`${css.col} ${css.col1}`}>Title</div>
      <div className={`${css.col} ${css.col2}`}>Description</div>
      
    </li>
        
        {taskStore.tasks.map((currentTask, index) => {
            
             return (<li key={index} className={css.tablerow}>
                 <div className={`${css.col} ${css.col1}`}>{currentTask.title}</div>
                 <div className={`${css.col} ${css.col2}`}>{currentTask.description}</div>
                 </li>);
          })}
          
    </ul>)
}

export default TaskList;
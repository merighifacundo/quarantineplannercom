
import css from "./taskCreator.css";
import {useState} from 'react';
import { useDispatch } from 'react-redux'
import {addTask} from '../../actions/taskActions';
const TaskCreator = () => {
const dispatch = useDispatch()

const [title,setTitle] = useState();
const [description,setDescription] = useState();

const dispatchAddTask = () => {
    dispatch(addTask(title, description));
}
return (

<div className={`${css.formLeft} ${css.form}`}>
<h1>Create a Task</h1>
<div>
    
    <div className="inner-wrap">
        <label>Title <input type="text" name="field1" onChange={(e) => setTitle(event.target.value)} /></label>
        <label>Detail <textarea name="field2" onChange={(e) => setDescription(event.target.value)}></textarea></label>
    </div>

    
    <div className="button-section">
     <button className={css.button} onClick={() => {dispatchAddTask()}}>Create</button>
    
    </div>
</div>

</div>
    )

}

export default TaskCreator;
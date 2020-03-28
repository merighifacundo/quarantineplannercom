import TaskCreator from '../components/creator/taskCreator';
import ThoughtsWriter from '../components/creator/thoughtsWriter';
import TaskList from '../components/listing/taskList';
const Creator = () => (


<div>

    <div><TaskCreator></TaskCreator><ThoughtsWriter></ThoughtsWriter></div>
    <div><TaskList></TaskList></div>
</div>)

export default Creator;
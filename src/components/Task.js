
import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa'
const Task = ({task, onDelete, onToggle}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : true}`}  onDoubleClick={(e)=>{e.stopPropagation();onToggle(task.id)}}>
            <h3>{task.text} <FaTimes onClick={()=> onDelete(task.id)} style={{color: 'red', cursor: 'pointer'}}/></h3>
            <h3>{task.day}</h3>
        </div>
    )
}

Task.propTypes = {
    onDelete: PropTypes.func
}

export default Task

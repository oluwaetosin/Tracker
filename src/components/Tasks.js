
import PropTypes from 'prop-types'
import  Task  from './Task'

const Tasks = ({tasks, onDelete, onToggle}) => {
    return (
        <>
            {tasks.map((task) => {
              return <Task key={task.id}  onDelete={onDelete} onToggle={onToggle} task={task} />
            })}
        </>
    )
}

Tasks.defaultProps = {
    tasks: []
}

Tasks.propTypes = {
tasks: PropTypes.array.isRequired,
onDelete: PropTypes.func
}

export default Tasks

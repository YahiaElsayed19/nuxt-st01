import classes from './AddTask.module.css'
import { useRef } from 'react'
function AddTask({ onAddTask }) {
    const taskRef = useRef()
    const addTaskHandler = () => {
        onAddTask(taskRef.current.value)
    }
    return (
        <form>
            <input type="text" ref={taskRef}/>
            <button onClick={addTaskHandler}>Submit</button>
        </form>
    )
}

export default AddTask
import { useState } from "react";

const AddTask = ({onAdd})=>{
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);
    const onSubmit = (e)=>{
        if(!text) {
            alert('Please Add Task');
            return;
        }

        onAdd({ text, day, reminder });
        setDay('');
        setText('');
        setReminder(false);

        e.preventDefault();
    }
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Tasks</label>
                <input type="text" placeholder="Add Task" value={text} onChange={(e)=>{setText(e.target.value)}} />
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input type="text" value={day} placeholder="Add day & Time" onChange={(e)=>{setDay(e.target.value)}} />
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input type="checkbox"
                checked={reminder}
                onChange={(e)=>{setReminder(e.currentTarget.checked)}} />
            </div>
            <input type="submit" value="Save Task" className="btn btn-block"/>
        </form>
    )
}

export default AddTask;
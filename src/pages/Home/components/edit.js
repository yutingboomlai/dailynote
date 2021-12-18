import { useState } from "react";
import { v4 } from "uuid";

const Edit = ({ add, submittingStatus }) => {
    const [task, setTask] = useState("");
    function noteChange(e) {
        setTask(e.target.value);
    }

    const [date, setDate] = useState("");
    function dataChange(e) {
        setDate(e.target.value);
    }

    const [time, setTime] = useState("");
    function timeChange(e) {
        setTime(e.target.value);
    }

    function additem() {
        submittingStatus.current = true
        add(function (prevData) {
            return [
                {
                    id: v4(),
                    task,
                    date,
                    time,
                },
                ...prevData,
            ];
        });
    }
    return (
        <div>
            <h1>Weekly Task List</h1>
            <p>Task:</p>
            <input type="text" value={task} onChange={noteChange} />
            <p>Date:</p>
            <input type="date" value={date} onChange={dataChange} />
            <p>Time:</p>
            <input type="time" value={time} onChange={timeChange} />
            <button onClick={additem} className="add">
                Add
            </button>
        </div>
    );
};

export default Edit;

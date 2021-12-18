const Item = ({ id, task, date, time, deleteData, submittingStatus }) => {


    function deleteNote() {
        submittingStatus.current = true
        deleteData(function (prev) {
            return prev.filter(item => item.id !== id)

        })
    }



    return (
        <div className="item">
            <div>
                <p>{task}</p>
                <p>{`${date} ${time}`}</p>

            </div>
            <button onClick={deleteNote} className="remove">Delete</button>
        </div>
    );
};

export default Item;

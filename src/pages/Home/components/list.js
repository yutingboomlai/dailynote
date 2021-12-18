import Item from "./item";

const List = ({ listData, deleteData, submittingStatus }) => {
    return (
        <div className="list">
            {listData.map((item) => {
                const { task, date, time, id } = item;
                return (
                    <Item
                        key={id}
                        id={id}
                        task={task}
                        date={date}
                        time={time}
                        deleteData={deleteData}
                        submittingStatus={submittingStatus} />
                );
            })}
        </div>
    );
};

export default List;
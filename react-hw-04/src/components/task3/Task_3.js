import DataMaker from "./DataMaker";
import Posts from "./Posts";

const Task_3 = () => {
    const url = "https://jsonplaceholder.typicode.com/todos?_limit=10"

    return (
        <div>
            <h2>Task 3</h2>
            <DataMaker url={url} renderDataUrl ={(data) => <Posts posts={data} />} />
        </div>
    )
}

export default Task_3
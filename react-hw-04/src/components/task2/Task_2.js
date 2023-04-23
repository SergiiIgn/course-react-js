import AlbumsList from "./AlbumsList";
import UsersList from "./UsersList";

const USER_BASE_URL = "https://jsonplaceholder.typicode.com/users?_limit=10"
const ALBUMS_BASE_URL = "https://jsonplaceholder.typicode.com/albums/1/photos?_limit=10"

const Task_2 = () => {
    return (
        <div>
            <h2>Task 2</h2>
            <UsersList url={USER_BASE_URL} />
            <AlbumsList url={ALBUMS_BASE_URL} />
        </div>
    )
}

export default Task_2
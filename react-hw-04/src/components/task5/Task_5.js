import User from "./User";
import Album from "./Album";
import { userData } from "../../data/userData";
import { albumData } from "../../data/albumData";

import AlbumsList from "./AlbumsList";
import UsersList from "./UsersList";

const USER_BASE_URL = "https://jsonplaceholder.typicode.com/users?_limit=10"
const ALBUMS_BASE_URL = "https://jsonplaceholder.typicode.com/albums/1/photos?_limit=10"


const Task_5 = () => {
    return (
        <div>
            <h2>Task 5</h2>
            <User 
                username={userData.username}
                email={userData.email }
                address={userData.address}
                phone={userData.phone}
                company={userData.company}
            />
            <Album
                title={albumData.title}
                url={albumData.url}
            />
            <UsersList url={USER_BASE_URL} />
            <AlbumsList url={ALBUMS_BASE_URL} />
        </div>
    )
}

export default Task_5
import User from "./User";
import Album from "./Album";
import { userData } from "../../data/userData";
import { albumData } from "../../data/albumData";

const Task_1 = () => {
    return (
        <div>
            <h2>Task 1</h2>
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
        </div>
    )
}

export default Task_1
import User from "../task1/User";
import { withFetchingData } from "../../HOCs/withFetchingData";

const UsersList = ({ data: users, isLoading, error }) => {
    return (
        <div>
            <h3>USERS</h3>
            {isLoading && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}
            {users && users.map(user => (
                <User
                key={user.id}
                username={user.username}
                email={user.email}
                address={user.address}
                phone={user.phone}
                company={user.company}
                />
            ))}
        </div>
    )
}

export default withFetchingData(UsersList)

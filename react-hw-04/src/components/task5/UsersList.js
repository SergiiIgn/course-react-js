import User from "./User"
import { useFetch } from "../../hooks/useFetch"

const UsersList = (props) => {
    const { data: users, isLoading, error } = useFetch(props.url)
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

export default UsersList
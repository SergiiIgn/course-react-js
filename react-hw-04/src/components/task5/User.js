import { useToggle } from "../../hooks/useToggler" 

const User = ({ username, email, address, phone, company }) => {
    const [isLiked, setIsLiked] = useToggle()
    return (
        <div>
            <h4>{username}</h4>
            <h4>email: {email}</h4> 
            {isLiked && <p>Address: {address.city} {address.street} {address.suite}</p>}
            {isLiked && <p>Phone: {phone}</p>}
            {isLiked && <p>Company: {company.name}</p>}
            <button on onClick={(setIsLiked)}>{isLiked? "Hide details" : "See details"}</button>
        </div>
    )
}
 
export default User
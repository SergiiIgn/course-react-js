import { withToggler } from "../../HOCs/withToggler"

const User = ({ username, email, address, phone, company, toggled, changeToggle }) => {

    return (
        <div>
            <h4>{username}</h4>
            <h4>email: {email}</h4> 
            {toggled && <p>Address: {address.city} {address.street} {address.suite}</p>}
            {toggled && <p>Phone: {phone}</p>}
            {toggled && <p>Company: {company.name}</p>}
            <button on onClick={(changeToggle)}>{toggled? "Hide details" : "See details"}</button>
        </div>
    )
}
 
export default withToggler(User)
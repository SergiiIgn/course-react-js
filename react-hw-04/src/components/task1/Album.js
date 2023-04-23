import "../../styles/album.css";
import heartIcon from "../../icons/heart.png";
import cloud from "../../icons/cloud.png"

import { withToggler } from "../../HOCs/withToggler"

const Album = ({ title, url, toggled, changeToggle }) => {
    return (
        <div>
            <h4>{title}</h4>
            <div  className="picture">
                <img src={ url } alt="img" />
                <button className="button" onClick={changeToggle}>
                    {toggled ? <img style={{width: 100 + "%"}} src={heartIcon} alt="liked" /> : <img style={{width: 100 + "%"}} src={cloud} alt="not liked" />}
                </button>
            </div>
        </div>

    )
}

export default withToggler(Album)
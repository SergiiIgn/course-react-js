import "../../styles/album.css";
import heartIcon from "../../icons/heart.png";
import cloud from "../../icons/cloud.png"

import { useToggle } from "../../hooks/useToggler";

const Album = ({ title, url }) => {
    const [isLiked, setIsLiked] = useToggle()
    return (
        <div>
            <h4>{title}</h4>
            <div  className="picture">
                <img src={ url } alt="img" />
                <button className="button" onClick={setIsLiked}>
                    {isLiked ? <img style={{width: 100 + "%"}} src={heartIcon} alt="liked" /> : <img style={{width: 100 + "%"}} src={cloud} alt="not liked" />}
                </button>
            </div>
        </div>

    )
}

export default Album
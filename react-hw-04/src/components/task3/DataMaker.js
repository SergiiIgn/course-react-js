import {useState, useEffect } from "react";

const DataMarket = ({ url, renderDataUrl }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setPosts(data));
    }, [url]);

    return <div>{renderDataUrl(posts)}</div>
        
    

}
export default DataMarket
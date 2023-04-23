import Album from "../task1/Album"
import { withFetchingData } from "../../HOCs/withFetchingData"

const AlbumsList = ({data: albums, isLoading, error}) => {
    return (
        <div>
            <h3>ALBUMS</h3>
            {isLoading && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}
            {albums && albums.map(album => (
                <Album
                key={album.id}
                title={album.title}
                url={album.url}
                toggled={album.toggled}
                changeToggle={album.changeToggle}
                />
            ))}
        </div>
    )
}

export default withFetchingData(AlbumsList)
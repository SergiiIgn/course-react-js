import Album from "./Album"
import { useFetch } from "../../hooks/useFetch"

const AlbumsList = (props) => {
    const { data: albums, isLoading, error } = useFetch(props.url)
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

export default AlbumsList
import Post from "./Post";

const Posts = ({ posts }) => {
    return (
        <div>
            <h3>POSTS</h3>
            <ul>
                {posts.map((post) => (
                <Post key={post.id} post={post}/>
                ))}
            </ul>
        </div>
    );
};

export default Posts
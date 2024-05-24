import Post from '@/src/components/Post.jsx';
import classess from '@/src/components/PostsList.module.css';
import NewPost from '@/src/components/NewPost.jsx';

function PostsList() {
    return (
        <>
            <NewPost />
            <ul className={classess.posts}>
            <Post author="Anthony" body="React.js is awesome!" />
            <Post author="Manuel" body="Check out the full course!" />
            </ul>
        </>
    )
}

export default PostsList;
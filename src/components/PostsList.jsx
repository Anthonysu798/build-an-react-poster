import Post from '@/src/components/Post.jsx';
import classess from '@/src/components/PostsList.module.css';

function PostsList() {
    return (
        <>
            <ul className={classess.posts}>
            <Post author="Anthony" body="React.js is awesome!" />
            <Post author="Manuel" body="Check out the full course!" />
            </ul>
        </>
    )
}

export default PostsList;
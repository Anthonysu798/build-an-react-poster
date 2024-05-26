import { useState } from 'react';

import Post from '@/src/components/Post.jsx';
import classess from '@/src/components/PostsList.module.css';
import NewPost from '@/src/components/NewPost.jsx';

function PostsList() {
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState(''); 

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }

    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    return (
        <>
            <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler} />
            <ul className={classess.posts}>
            <Post author={enteredAuthor} body={enteredBody} />
            <Post author="Manuel" body="Check out the full course!" />
            </ul>
        </>
    );
}

export default PostsList;
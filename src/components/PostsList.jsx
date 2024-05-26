import { useState } from 'react';

import Post from '@/src/components/Post.jsx';
import classes from '@/src/components/PostsList.module.css';
import NewPost from '@/src/components/NewPost.jsx';
import Modal from '@/src/components/Modal.jsx';

function PostsList() {
    const [ modalIsVisible, setModalIsVisible ] = useState(true); // Set Modal to be visible as default
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState(''); 

    // Hide Modal Handler 
    function hideModalHandler() {
        setModalIsVisible(false);
    }

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }

    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    return (
        <>
        {/* // If modalIsVisible is true, show the Modal component */}
        {modalIsVisible ? <Modal onClose={hideModalHandler} > 
            <NewPost
                onBodyChange={bodyChangeHandler}
                onAuthorChange={authorChangeHandler}
            />
        </Modal> : false} 
        
            <ul className={classes.posts}>
            <Post author={enteredAuthor} body={enteredBody} />
            <Post author="Manuel" body="Check out the full course!" />
            </ul>
        </>
    );
}

export default PostsList;
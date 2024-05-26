import { useState } from "react";

import Post from "@/src/components/Post.jsx";
import classes from "@/src/components/PostsList.module.css";
import NewPost from "@/src/components/NewPost.jsx";
import Modal from "@/src/components/Modal.jsx";

function PostsList({isPosting, onStopPosting}) {
	
	const [enteredBody, setEnteredBody] = useState("");
	const [enteredAuthor, setEnteredAuthor] = useState("");


	function bodyChangeHandler(event) {
		setEnteredBody(event.target.value);
	}

	function authorChangeHandler(event) {
		setEnteredAuthor(event.target.value);
	}

	// let modalContent;

	// if (modalIsVisible) {
	//     modalContent = <Modal onClose={hideModalHandler} >
	//     <NewPost
	//         onBodyChange={bodyChangeHandler}
	//         onAuthorChange={authorChangeHandler}
	//     />
	//     </Modal>
	// }

	return (
		<>
			{/* If modalIsVisible is true, show the Modal component */}
			{isPosting && (
				<Modal onClose={onStopPosting}>
					<NewPost
						onBodyChange={bodyChangeHandler}
						onAuthorChange={authorChangeHandler}
					/>
				</Modal>
			)}
			<ul className={classes.posts}>
				<Post author={enteredAuthor} body={enteredBody} />
				<Post author="Manuel" body="Check out the full course!" />
			</ul>
		</>
	);
}

export default PostsList;

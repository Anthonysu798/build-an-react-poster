import { useState } from "react";

import Post from "@/src/components/Post.jsx";
import classes from "@/src/components/PostsList.module.css";
import NewPost from "@/src/components/NewPost.jsx";
import Modal from "@/src/components/Modal.jsx";

function PostsList({isPosting, onStopPosting}) {
	
	return (
		<>
			{/* If modalIsVisible is true, show the Modal component */}
			{isPosting && (
				<Modal onClose={onStopPosting}>
					<NewPost
                        onCancel={onStopPosting}
					/>
				</Modal>
			)}
			<ul className={classes.posts}>
				<Post author="Manuel" body="Check out the full course!" />
			</ul>
		</>
	);
}

export default PostsList;

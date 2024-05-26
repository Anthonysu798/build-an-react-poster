import { useState } from "react";

import Post from "@/src/components/Post.jsx";
import classes from "@/src/components/PostsList.module.css";
import NewPost from "@/src/components/NewPost.jsx";
import Modal from "@/src/components/Modal.jsx";

function PostsList({ isPosting, onStopPosting }) {
	const [posts, setPosts] = useState([]);

	function addPostHandler(postData) {
		setPosts((existingPosts) => [postData, ...existingPosts]);
	}

	return (
		<>
			{/* If modalIsVisible is true, show the Modal component */}
			{isPosting && (
				<Modal onClose={onStopPosting}>
					<NewPost
						onCancel={onStopPosting}
						onAddPost={addPostHandler}
					/>
				</Modal>
			)}
			<ul className={classes.posts}>
				{posts.map((post) => (
					<Post key={post.body} author={post.author} body={post.body} />
				))}
			</ul>
		</>
	);
}

export default PostsList;

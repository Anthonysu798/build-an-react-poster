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
			{posts.length > 0 && (
				<ul className={classes.posts}>
					{posts.map((post) => (
						<Post
							key={post.body}
							author={post.author}
							body={post.body}
						/>
					))}
				</ul>
			)}
			{posts.length === 0 && (
				<div style={{ textAlign: "center", color: "white" }}>
					<h1 className="text-2xl font-bold">There are no posts yet.</h1>
					<p>Start adding some!</p>
				</div>
			)}
		</>
	);
}

export default PostsList;

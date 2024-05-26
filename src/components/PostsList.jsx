import { useState, useEffect } from "react";

import Post from "@/src/components/Post.jsx";
import classes from "@/src/components/PostsList.module.css";
import NewPost from "@/src/components/NewPost.jsx";
import Modal from "@/src/components/Modal.jsx";

function PostsList({ isPosting, onStopPosting }) {
	const [posts, setPosts] = useState([]);
	const [isFetching, setIsFetching] = useState(false);

	useEffect(() => {
		async function fetchPosts() {
			setIsFetching(true); // Set isFetching to true to show loading spinner while fetching data
			const response = await fetch("http://localhost:8080/posts");
			const resData = await response.json();
            if (!response.ok) {
                throw new Error(resData.message || "Failed to fetch posts.");
            }

			setPosts(resData.posts);
			setIsFetching(false); // Set isFetching to false to hide loading spinner after fetching data
		}

		fetchPosts();
	}, []);

	function addPostHandler(postData) {
		// Send a POST request to the server to add a new post
		fetch("http://localhost:8080/posts", {
			method: "POST",
			body: JSON.stringify(postData),
			headers: {
				"Content-Type": "application/json",
			},
		});
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
			{!isFetching && posts.length > 0 && (
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
			{!isFetching && posts.length === 0 && (
				<div style={{ textAlign: "center", color: "white" }}>
					<h1 className="text-2xl font-bold">
						There are no posts yet.
					</h1>
					<p>Start adding some!</p>
				</div>
			)}
			{isFetching && (
				<div style={{ textAlign: "center", color: "white" }}>
					<p>Loading posts...</p>
				</div>
			)}
		</>
	);
}

export default PostsList;

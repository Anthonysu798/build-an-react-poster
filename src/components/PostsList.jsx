import { useLoaderData } from "react-router-dom";

import Post from "@/src/components/Post.jsx";
import classes from "@/src/components/PostsList.module.css";

function PostsList() {
    const posts = useLoaderData();

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
					<h1 className="text-2xl font-bold">
						There are no posts yet.
					</h1>
					<p>Start adding some!</p>
				</div>
			)}
		</>
	);
}

export default PostsList;

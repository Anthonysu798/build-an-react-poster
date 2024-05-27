import { useLoaderData } from "react-router-dom";

import Post from "@/src/components/Post.jsx";
import classes from "@/src/components/PostsList.module.css";

function PostsList() {
    const posts = useLoaderData();

	return (
		<>
			{posts.length > 0 && (
				<ul className={classes.posts}>
					{posts.map((post) => (
						<Post
							key={post.id}
                            id={post.id}
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

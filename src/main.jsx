import React from "react";
import ReactDOM from "react-dom/client";
import Posts, { loader as postsLoader } from "./routes/Posts";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NewPost, { action as newPostAction } from "./routes/NewPost";
import PostDetails, { loader as postDetailsLoader } from "./routes/PostDetails";
import RootLayout from "./routes/RootLayout";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				path: "/",
				element: <Posts />,
				loader: postsLoader,
				children: [
					{
						path: "/create-post",
						element: <NewPost />,
						action: newPostAction,
					}, // Create Post
					{
						path: "/:postId",
						element: <PostDetails />,
						loader: postDetailsLoader,
					}, // Post Details
				],
			}, // Home
		],
	}, // Root Layout
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

import { Outlet } from "react-router-dom";

import PostsList from "../components/PostsList";

function Posts() {
	return (
		// Need atleast one root element
		// return a fragment
		<>
			<Outlet />
			<main>
				<PostsList />
			</main>
		</>
	);
}

export default Posts;

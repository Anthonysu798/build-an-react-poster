import { useState } from "react";
import PostsList from "@/src/components/PostsList.jsx";
import MainHeader from "@/src/components/MainHeader.jsx";

function App() {
	const [modalIsVisible, setModalIsVisible] = useState(false); // Set Modal to be visible as default

	// Show Modal Handler
	function showModalHandler() {
		setModalIsVisible(true);
	}

	// Hide Modal Handler
	function hideModalHandler() {
		setModalIsVisible(false);
	}

	return (
		// Need atleast one root element
		// return a fragment
		<>
			<MainHeader onCreatePost={showModalHandler} />
			<main>
				<PostsList
					isPosting={modalIsVisible}
					onStopPosting={hideModalHandler}
				/>
			</main>
      
		</>
	);
}

export default App;

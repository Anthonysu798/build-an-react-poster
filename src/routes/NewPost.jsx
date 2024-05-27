import { Link } from "react-router-dom";
import { useState } from "react";
import classes from "./NewPost.module.css";
import Modal from "../components/Modal";


function NewPost({ onAddPost }) {
	const [enteredBody, setEnteredBody] = useState("");
	const [enteredAuthor, setEnteredAuthor] = useState("");

	function bodyChangeHandler(event) {
		setEnteredBody(event.target.value);
	}

	function authorChangeHandler(event) {
		setEnteredAuthor(event.target.value);
	}

	// Submit handler
	function submitHandler(event) {
		// Prevent the user send the form
		event.preventDefault();
		const postData = {
			body: enteredBody,
			author: enteredAuthor,
		};
        onAddPost(postData);
        onCancel();
	}

	return (
		<Modal>

	
		<form className={classes.form} onSubmit={submitHandler}>
			<p>
				<label htmlFor="body">Text</label>
				<textarea
					id="body"
					required
					rows={3}
					onChange={bodyChangeHandler}
				/>
			</p>
			<p>
				<label htmlFor="name">Your name</label>
				<input
					type="text"
					id="name"
					required
					onChange={authorChangeHandler}
				/>
			</p>

			<p className={`${classes.actions} mt-5`}>
				{" "}
				{/* When clicked on Cancelled should go back to home page */}
				<Link to=".." type="button"> 
					Cancel
				</Link>
				{/* Only the submit button will submit the form */}
				<button>Submit</button>
			</p>
		</form>
		</Modal>
	);
}

export default NewPost;

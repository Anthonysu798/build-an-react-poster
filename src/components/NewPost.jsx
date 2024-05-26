import { useState } from "react";
import classes from "./NewPost.module.css";

function NewPost({ onCancel }) {
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
		const postDate = {
			body: enteredBody,
			author: enteredAuthor,
		};
        onCancel();
        
	}

	return (
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
				{/* Multiple Styling */}
				{/* Cancel the form when clicked */}
				<button type="button" onClick={onCancel}>
					Cancel
				</button>
				{/* Only the submit button will submit the form */}
				<button>Submit</button>
			</p>
		</form>
	);
}

export default NewPost;

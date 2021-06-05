import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalState } from "../store/appContext";

export const AddContact = () => {
	const { actions, store } = useContext(GlobalState);
	const [contact, setContact] = useState({ full_name: null, email: null, address: null, phone: null });

	const handleInput = e => {
		// console.log(e.target.name);
		setContact({ ...contact, [e.target.name]: e.target.value });
	};

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							name="full_name"
							placeholder="Full Name"
							onChange={handleInput}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							name="email"
							placeholder="Enter email"
							onChange={handleInput}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							name="address"
							placeholder="Enter phone"
							onChange={handleInput}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							name="phone"
							placeholder="Enter address"
							onChange={handleInput}
						/>
					</div>
					<button
						type="button"
						className="btn btn-primary form-control"
						onClick={() => actions.postFetch(contact)}>
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};

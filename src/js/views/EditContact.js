import React, { useContext, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { GlobalState } from "../store/appContext";

export const EditContact = props => {
	const [editedContact, setEditedContact] = useState({
		full_name: "",
		email: "",
		phone: "",
		address: "",
		id: ""
	});
	const { actions, store } = useContext(GlobalState);

	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/contact/" + props.match.params.id)
			.then(response => {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				return response.json();
			})
			.then(data =>
				setEditedContact({
					full_name: data.full_name,
					email: data.email,
					phone: data.phone,
					address: data.address,
					id: data.id
				})
			)
			.catch(error => console.log("There was an error"));
	}, []);

	let contact = store.contacts.find(con => con.id == props.match.params.id);

	const handleInput = e => {
		setEditedContact({
			...editedContact,
			[e.target.name]: e.target.value
		});
	};

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Edit contact {editedContact.id}</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							onChange={handleInput}
							type="text"
							className="form-control"
							name="full_name"
							placeholder="Full Name"
							value={editedContact.full_name}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							onChange={handleInput}
							type="email"
							className="form-control"
							placeholder="Enter email"
							value={editedContact.email}
							name="email"
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							onChange={handleInput}
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							value={editedContact.phone}
							name="phone"
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							onChange={handleInput}
							type="text"
							className="form-control"
							placeholder="Enter address"
							value={editedContact.address}
							name="address"
						/>
					</div>
					<Link className="mt-3 w-100 text-center" to="/">
						<button
							type="button"
							className="btn btn-primary form-control"
							onClick={actions.updateFetch(editedContact)}>
							save
						</button>
					</Link>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
EditContact.propTypes = {
	history: PropTypes.object,
	match: PropTypes.object
};

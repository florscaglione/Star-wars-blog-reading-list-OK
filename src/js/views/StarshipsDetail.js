import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

const StarshipsDetail = () => {
	const { store, actions } = useContext(Context);
	const [detail, setDetail] = useState([]);

	async function getDetails() {
		const response = await fetch(store.details);
		const responseJson = await response.json();
		setDetail(responseJson.result.properties);
	}
	useEffect(() => {
		getDetails();
	}, []);
	return (
		<div className="container">
			<ul className="list-group starship">
				<p> NAME: {detail.name}</p>
				<p> STARSHIP CLASS: {detail.starship_class}</p>
				<p> MANUFACTURER: {detail.manufacturer}</p>
				<p> PASSENGERS: {detail.passengers}</p>
				<p> MODEL: {detail.model}</p>
				<p> CREW: {detail.crew}</p>
			</ul>
			<br />
			<Link to="/">
				<button
					className="btn btn-primary"
					onClick={() => {
						actions.deleteDetails(detail);
					}}>
					Back home
				</button>
			</Link>
		</div>
	);
};

export default StarshipsDetail;

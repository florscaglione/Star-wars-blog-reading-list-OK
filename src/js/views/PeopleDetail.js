import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

const PeopleDetail = () => {
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
			<ul className="list-group">
				<p> NAME: {detail.name}</p>
				<p> HEIGHT: {detail.height}</p>
				<p> HAIR COLOR: {detail.hair_color}</p>
				<p> SKIN COLOR: {detail.skin_color}</p>
				<p> EYE COLOR: {detail.eye_color}</p>
				<p> GENDER: {detail.gender}</p>
				<p>BIRTH YEAR: {detail.birth_year}</p>
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
export default PeopleDetail;

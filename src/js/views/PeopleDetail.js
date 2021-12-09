import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import imgSize800x600 from "../../img/imgSize800x600.png";

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
		<div className="container mt-5 pt-5">
			<div className="row border-dark border-bottom pb-3">
				<div className="col-sm mt-3 p-1">
					<img
						src={imgSize800x600}
						width="540"
						alt="starwars logo"
						className="img-fluid rounded mx-auto d-block"
					/>
				</div>
				<div className="col-sm p-1">
					<h1 className="my-4 font-weight-bold text-center">{detail.name}</h1>
					<p className="text-center text-white m-3">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
						voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor
						sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
						ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
						dolore eu fugiat nulla pariatur.
					</p>
				</div>
			</div>
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

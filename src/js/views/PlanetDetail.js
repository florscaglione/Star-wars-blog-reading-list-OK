import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

const PlanetDetail = () => {
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
			<ul className="list-group planet">
				<p> NAME: {detail.name}</p>
				<p> POPULATION: {detail.population}</p>
				<p> CLIMATE: {detail.climate}</p>
				<p> DIAMETER: {detail.diameter}</p>
				<p> TERRAIN: {detail.terrain}</p>
				<p> SURFACE WATER: {detail.surface_water}</p>
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

export default PlanetDetail;

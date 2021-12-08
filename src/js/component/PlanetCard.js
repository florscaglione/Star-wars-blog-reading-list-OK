import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const PlanetCard = () => {
	const [planets, setPlanets] = useState([]);
	const { store, actions } = useContext(Context);

	async function getPlanet() {
		const response = await fetch("https://www.swapi.tech/api/planets");

		const responseJson = await response.json();
		setPlanets(responseJson.results);
	}
	useEffect(() => {
		getPlanet();
	}, []);

	return (
		<div className="container">
			<h1>PLANETS</h1>
			<div className="row flex-nowrap ">
				{planets.map(planet => {
					return (
						<div className="card col-3 m-4" key={planet.uid}>
							<img
								className="card-img-top"
								src="https://starwarsblog.starwars.com/wp-content/uploads/2018/10/mustafar-tall.jpg"
								alt="Card image cap"
							/>
							<h5>{planet.name}</h5>
							<div className="card-body">
								<p className="card-text">
									This is a longer card with supporting text below as a natural lead-in to additional
									content. This content is a little bit longer.
								</p>
								<button
									className="fas fa-heart"
									onClick={() => {
										actions.addFav(planet.name);
									}}
								/>
								<Link to="/PlanetDetail">
									<button
										className="details"
										onClick={() => {
											actions.addDetails(planet.url);
										}}>
										Details
									</button>
								</Link>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
export default PlanetCard;

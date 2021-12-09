import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import StarWarsPlanet from "../../img/star-wars-planet.jpg";

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
		<div className="container mt-3">
			<h1>PLANETS</h1>
			<div className="row flex-nowrap ">
				{planets.map(planet => {
					return (
						<div className="card col-3 m-4" key={planet.id}>
							<img className="card-img-top mt-2" src={StarWarsPlanet} alt="Card image" />
							<h5>{planet.name}</h5>
							<div className="card-body">
								<p className="card-text">
									This is a longer card with supporting text below as a natural lead-in to additional
									content. This content is a little bit longer.
								</p>
								<button
									type="button"
									className="btn btn-dark rounded-top "
									onClick={() => {
										actions.addFav(planet.name);
									}}>
									{store.favorites.includes(planet.name) ? (
										<i className="fas fa-heart" />
									) : (
										<i className="far fa-heart" />
									)}
								</button>
								<Link to="/PlanetDetail">
									<button
										className="btn btn-secondary rounded-top"
										onClick={() => {
											actions.addDetails(planet.url);
										}}>
										Learn more!
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

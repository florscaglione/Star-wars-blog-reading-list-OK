import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import StarWarsStarships from "../../img/star-wars-starships.jpg";

const StarshipsCard = () => {
	const [starships, setStarships] = useState([]);
	const { store, actions } = useContext(Context);

	async function getStarships() {
		const response = await fetch("https://www.swapi.tech/api/starships");

		const responseJson = await response.json();
		setStarships(responseJson.results);
	}
	useEffect(() => {
		getStarships();
	}, []);

	return (
		<div className="container mt-3">
			<h1>STARSHIPS</h1>
			<div className="row flex-nowrap pb-5 mb-5">
				{starships.map(starship => {
					return (
						<div className="card col-3 m-4" key={starship.id}>
							<img className="card-img-top mt-2" src={StarWarsStarships} alt="Card image" />
							<h5>{starship.name}</h5>
							<div className="card-body">
								<p className="card-text">
									This is a longer card with supporting text below as a natural lead-in to additional
									content. This content is a little bit longer.
								</p>
								<button
									type="button"
									className="btn btn-dark rounded-top "
									onClick={() => {
										actions.addFav(starship.name);
									}}>
									{store.favorites.includes(starship.name) ? (
										<i className="fas fa-heart" />
									) : (
										<i className="far fa-heart" />
									)}
								</button>
								<Link to="/StarshipsDetail">
									<button
										className="btn btn-secondary rounded-top"
										onClick={() => {
											actions.addDetails(starship.url);
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
export default StarshipsCard;

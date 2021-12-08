import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

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
		<div className="container">
			<h1>STARSHIPS</h1>
			<div className="row flex-nowrap ">
				{starships.map(starship => {
					return (
						<div className="card col-3 m-4" key={starship.uid}>
							<img
								className="card-img-top"
								src="https://lumiere-a.akamaihd.net/v1/images/Star-Destroyer_ab6b94bb.jpeg?region=0%2C0%2C1600%2C900&width=960"
								alt="Card image cap"
							/>
							<h5>{starship.name}</h5>
							<div className="card-body">
								<p className="card-text">
									This is a longer card with supporting text below as a natural lead-in to additional
									content. This content is a little bit longer.
								</p>
								<button
									className="fas fa-heart"
									onClick={() => {
										actions.addFav(starship.name);
									}}
								/>
								<Link to="/StarshipsDetail">
									<button
										className="details"
										onClick={() => {
											actions.addDetails(starship.url);
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
export default StarshipsCard;

import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import StarWarsPeople from "../../img/star-wars-people.jpg";

const PeopleCard = () => {
	const [people, setPeople] = useState([]);
	const { store, actions } = useContext(Context);

	async function getPerson() {
		const response = await fetch("https://www.swapi.tech/api/people");

		const responseJson = await response.json();
		setPeople(responseJson.results);
	}
	useEffect(() => {
		getPerson();
	}, []);

	return (
		<div className="container mt-3">
			<h1>CHARACTERS</h1>
			<div className="row flex-nowrap ">
				{people.map(person => {
					return (
						<div className="card col-3 m-4" key={person.id}>
							<img className="card-img-top mt-2" src={StarWarsPeople} alt="Card image" />
							<h5>{person.name}</h5>
							<div className="card-body">
								<p className="card-text">
									This is a longer card with supporting text below as a natural lead-in to additional
									content. This content is a little bit longer.
								</p>
								<button
									type="button"
									className="btn btn-dark rounded-top "
									onClick={() => {
										actions.addFav(person.name);
									}}>
									{store.favorites.includes(person.name) ? (
										<i className="fas fa-heart" />
									) : (
										<i className="far fa-heart" />
									)}
								</button>
								<Link to="/PeopleDetail">
									<button
										className="btn btn-secondary rounded-top"
										onClick={() => {
											actions.addDetails(person.url);
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
export default PeopleCard;

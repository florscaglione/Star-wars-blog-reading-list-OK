import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

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
		<div className="container">
			<h1>PEOPLE</h1>
			<div className="row flex-nowrap ">
				{people.map(person => {
					return (
						<div className="card col-3 m-4" key={person.uid}>
							<img
								className="card-img-top"
								src="https://starwarsblog.starwars.com/wp-content/uploads/2021/03/leia-acme-archives-christophe-vacher-tall.jpg"
								alt="Card image cap"
							/>
							<h5>{person.name}</h5>
							<div className="card-body">
								<p className="card-text">
									This is a longer card with supporting text below as a natural lead-in to additional
									content. This content is a little bit longer.
								</p>
								<button
									className="fas fa-heart"
									onClick={() => {
										actions.addFav(person.name);
									}}
								/>
								<Link to="/PeopleDetail">
									<button
										className="details"
										onClick={() => {
											actions.addDetails(person.url);
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
export default PeopleCard;

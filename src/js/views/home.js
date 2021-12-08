import React from "react";
import PeopleCard from "../component/PeopleCard.js";
import "../../styles/home.scss";
import PlanetCard from "../component/PlanetCard.js";
import StarshipsCard from "../component/StarshipsCard.js";

const Home = () => {
	return (
		<div className="container one">
			<PeopleCard /> <PlanetCard /> <StarshipsCard />
		</div>
	);
};
export default Home;

import React from "react";
import { Navbar } from "./Navbar";
import { Jumbotron } from "./Jumbotron";
import { Card } from "./Card";
import { Footer } from "./Footer";
import { images } from "./Images";

export const Home = () => {
	const handleCharacterClick = (character) => {
		console.log("Datos del personaje:", character);
	};

	// Array con datos oficiales de Dragon Ball Super
	const dbData = [
		{
			title: "Goku Ultra Instinto",
			description: "El estado definitivo donde el cuerpo reacciona por sí solo. Rompiendo los límites en el Torneo del Poder contra Jiren.",
			imageUrl: images.characters.goku
		},
		{
			title: "Vegeta Dios Azul",
			description: "El Orgullo Saiyajin llevado al nivel divino. Vegeta entrena con Wiss para superar el poder de Kakarotto y Bills.",
			imageUrl: images.characters.vegeta
		},
		{
			title: "Saga de Goku Black",
			description: "Una de las amenazas más oscuras del futuro. Zamasu toma el cuerpo de Goku desatando el caos cronológico.",
			imageUrl: images.characters.freezer
		},
		{
			title: "Torneo del Poder",
			description: "8 universos, 80 guerreros y una sola regla: el universo perdedor será completamente borrado por Zeno-sama.",
			imageUrl: images.characters.piccolo
		}
	];

	return (
		<div className="d-flex flex-column min-vh-100 bg-secondary bg-opacity-10">
			<Navbar />
			<div className="container my-4">
				<Jumbotron />
				<div className="row text-center mt-4">
					{dbData.map((character, index) => (
						<Card
							key={index}
							title={character.title}
							description={character.description}
							imageUrl={character.imageUrl}
							onInspect={() => handleCharacterClick(character)}
						/>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
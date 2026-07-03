import React from "react";

export const Jumbotron = () => {
	return (
		<div className="bg-dark text-white p-5 rounded-lg m-3 border border-warning shadow-lg" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7))' }}>
			<h1 className="display-4 fw-bold text-warning"> Bienvenido al Universo de Dragon Ball Super. Es mucho mejor que dragon ball Z	 </h1>
			<p className="lead">
				Explora los límites de los dioses Javier tu puedes , domina el Ultra Instinto y revive las batallas más épicas. El Torneo del Poder ha comenzado y solo los guerreros más fuertes sobrevivirán.
			</p>
			<hr className="my-4 border-warning" />
			<p>¿Estás listo para ver dragon ball super JAVIER PESTANA?</p>
			<a className="btn btn-warning btn-lg fw-bold px-4 text-dark" href="https://dragonball.news/" target="_blank" rel="noreferrer" role="button">
				Los mejores luchadores
			</a>
		</div>
	);
};
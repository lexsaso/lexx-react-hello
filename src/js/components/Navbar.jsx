import React from "react";
import { images } from "./Images";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
			<div className="container">
				<a className="navbar-brand fw-bold text-warning d-flex align-items-center gap-2" href="#">
					
				</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse justify-content-end" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<a className="nav-link active" href="#">Home</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">Sagas</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">Personajes</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">Contacto</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
import React from "react";
import { images } from "./Images";

export const Card = (props) => {
    const handleImageError = (event) => {
        event.currentTarget.src = images.logo;
        event.currentTarget.style.objectFit = "contain";
        event.currentTarget.style.backgroundColor = "#111";
    };

    return (
        <div className="col-lg-3 col-md-6 mb-4">
            <div className="card h-100 text-center shadow-sm border-secondary">
                {/* Imagen del personaje o saga */}
                <img
                    src={props.imageUrl}
                    className="card-img-top"
                    alt={props.title}
                    style={{
                        height: "300px",
                        objectFit: "contain",
                        objectPosition: "top center",
                        backgroundColor: "#0b0b0b",
                        padding: "8px"
                    }}
                    onError={handleImageError}
                />

                {/* Cuerpo de la tarjeta con info */}
                <div className="card-body bg-dark text-white d-flex flex-column justify-content-between">
                    <h5 className="card-title text-warning fw-bold">{props.title}</h5>
                    <p className="card-text small text-light">{props.description}</p>
                </div>

                {/* Botón de acción en el pie de la tarjeta */}
                <div className="card-footer bg-dark border-top border-secondary">
                    <button
                        type="button"
                        className="btn btn-warning btn-sm fw-bold w-100"
                        onClick={props.onInspect}
                    >
                        dale un kamehameha
                    </button>
                </div>
            </div>
        </div>
    );
};
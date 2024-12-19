import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../context/userContext";

const NavBar = () => {
    const { user, logout } = useUser(); // Accede al usuario desde el contexto

    return (
        <nav
            className="navbar navbar-expand-lg bg-secondary-subtle m-0 w-100"
            id="navbar"
        >
            <div className="container m-0">
                <Link className="navbar-brand" to="/">
                    <img
                        src="/img/logo.png"
                        height="40px"
                        alt="logo de xplora cultura"
                    />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Eventos
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Vende tu evento
                            </a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/community">
                                Únete
                            </Link>
                        </li>
                        {user ? (
                            <>
                                <li className="nav-item">
                                    <button
                                        className="nav-link text-danger"
                                        onClick={logout}
                                    >
                                    Hola, {user.name} ♥️
                                    </button>
                                </li>
                            </>
                        ) : (
                            <li className="nav-item">
                                <Link className="nav-link text-danger" to="/login">
                                    Login
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;

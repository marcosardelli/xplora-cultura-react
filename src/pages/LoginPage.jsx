import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "./context/UserContext"; // Importa el contexto del usuario
import Carousel from "../components/Carousel";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const { login } = useUser(); // Accede al método login desde el contexto
    const navigate = useNavigate(); // Hook de navegación

    // Validación del nombre de usuario
    const validateUsername = () => {
        const regex = /^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+$/;
        if (!regex.test(username)) {
            setUsernameError(
                "El nombre de usuario debe iniciar con mayúscula, contener solo letras y no tener espacios."
            );
            return false;
        }
        setUsernameError("");
        return true;
    };

    // Validación de la contraseña
    const validatePassword = () => {
        if (password !== "1234") {
            setPasswordError("La contraseña debe ser 1234.");
            return false;
        }
        setPasswordError("");
        return true;
    };

    // Manejo del inicio de sesión
    const handleLogin = (e) => {
        e.preventDefault();

        const isUsernameValid = validateUsername();
        const isPasswordValid = validatePassword();

        if (isUsernameValid && isPasswordValid) {
            login({ name: username }); // Guarda el usuario en el contexto o sessionStorage
            alert(`Inicio de sesión exitoso🎉 Bienvenido, ${username}`);

            // Redirige a la ruta raíz después de 1.5 segundos
            setTimeout(() => {
                navigate("/");
            }, 1500);
        }
    };

    return (
        <div className="container">
            <div className="row">
                {/* Formulario */}
                <div className="col-md-6 col-12 p-3">
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <label htmlFor="userName">Nombre de usuario</label>
                            <input
                                type="text"
                                className="form-control"
                                id="userName"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Introduce un nombre de usuario"
                            />
                            {usernameError && (
                                <small className="text-danger">{usernameError}</small>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="Password">Contraseña</label>
                            <input
                                type="password"
                                className="form-control"
                                id="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Introduce 1234"
                            />
                            {passwordError && (
                                <small className="text-danger">{passwordError}</small>
                            )}
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-danger mt-4 px-4">
                                LOGIN
                            </button>
                        </div>
                    </form>
                </div>
                {/* Carrusel */}
                <div className="col-md-6 col-12">
                    <Carousel />
                </div>
            </div>
        </div>
    );
};

export default Login;

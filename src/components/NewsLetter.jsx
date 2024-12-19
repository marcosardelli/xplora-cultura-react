import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Newsletter() {
    const [email, setEmail] = useState(""); // Almacena el correo electrónico del usuario
    const [isSubscribed, setIsSubscribed] = useState(false); // Controla el estado de la suscripción
    const navigate = useNavigate(); // Hook para la navegación

    // Función para manejar el envío del formulario de suscripción
    const subscribe = (e) => {
        e.preventDefault();
        if (email) {
            setIsSubscribed(true); // Cambiar el estado a suscrito
            setEmail(""); // Limpiar el campo de correo electrónico
        }
    };

    // Función para resetear el estado y redirigir al usuario a la página de suscripción
    const resetAndGoBack = () => {
        setIsSubscribed(false); // Resetear el estado de la suscripción
        navigate("/"); // Redirigir a la página de inicio
    };

    return (
        <section id="formulario" className="container text-center bg-light" aria-labelledby="newsletter-title">
            {/* Mostrar formulario de suscripción */}
            {!isSubscribed ? (
                <div className="pb-3">
                    {/* <h4 id="newsletter-title">
                        Conoce todos los eventos antes que nadie con nuestra newsletter
                    </h4> */}

                    <form className="d-flex justify-content-center" onSubmit={subscribe}>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            className="form-control w-50"
                            placeholder="Correo electrónico"
                            required
                            aria-label="Correo electrónico"
                        />
                        <button type="submit" className="btn btn-danger ms-2">
                            Suscribirse 🤍
                        </button>
                    </form>
                </div>
            ) : (
                /* Mostrar mensaje de aceptación si está suscrito */
                <div id="acceptForm" className="container d-flex justify-content-center align-items-center">
                    <div className="text-center">
                        <div className="alert alert-secondary" role="alert">
                            <h4 className="alert-heading">
                                Gracias por suscribirte a nuestra newsletter.
                            </h4>
                            <p>
                                A partir de ahora, estarás al tanto de todas nuestras novedades,
                                eventos y contenido exclusivo. ¡Estamos emocionados de que te unas a nuestra
                                comunidad! Recibirás un correo electrónico con las últimas actualizaciones
                                directamente en tu bandeja de entrada. No olvides revisar nuestras redes sociales para
                                estar aún más conectado. Si tienes alguna pregunta o inquietud, no dudes en
                                contactarnos. ¡Te damos la bienvenida a nuestra familia!
                            </p>
                            <hr />
                            {/* Redirigir de vuelta a la página de suscripción cuando el usuario haga clic en 'Cerrar' */}
                            <button onClick={resetAndGoBack} className="btn btn-danger">
                                🤍 Me encanta!
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};
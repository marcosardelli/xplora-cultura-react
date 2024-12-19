import React, { useState } from "react";

const ContactModal = () => {
    const [showModal, setShowModal] = useState(false);

    // Función para cerrar el modal
    const closeModal = () => setShowModal(false);

    return (
        <>
            {/* Botón para abrir el modal */}
            <a
                type="button"
                className="link-danger"
                onClick={() => setShowModal(true)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-envelope"
                    viewBox="0 0 16 16"
                >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                </svg>
                <span className="ms-2">Contactar</span>
            </a>

            {/* Modal */}
            {showModal && (
                <>
                    <div
                        className="modal fade show"
                        style={{ display: "block" }}
                        tabIndex="-1"
                        role="dialog"
                        aria-labelledby="exampleModalCenterTitle"
                        aria-hidden={!showModal}
                    >
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalCenterTitle">
                                        Formulario de contacto
                                    </h5>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        {/* Name */}
                                        <div className="mb-3">
                                            <label htmlFor="name" className="form-label">
                                                Nombre y apellidos
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                placeholder="Enter your name"
                                                required
                                            />
                                        </div>
                                        {/* Email */}
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label">
                                                Correo electrónico
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                placeholder="Enter your email"
                                                required
                                            />
                                        </div>
                                        {/* Message */}
                                        <div className="mb-3">
                                            <label htmlFor="message" className="form-label">
                                                Escribe tu mensaje
                                            </label>
                                            <textarea
                                                className="form-control"
                                                id="message"
                                                rows="4"
                                                placeholder="Write your message here"
                                                required
                                            ></textarea>
                                        </div>
                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            className="btn btn-outline-danger w-100"
                                        >
                                            ENVIAR
                                        </button>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-outline-danger"
                                        onClick={closeModal}
                                    >
                                        ✖️
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Overlay para el fondo del modal */}
                    <div
                        className="modal-backdrop fade show"
                        onClick={closeModal}
                        style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: 1040 }}
                    ></div>
                </>
            )}
        </>
    );
};

export default ContactModal;
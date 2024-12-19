import React, { useState } from "react";

const PrivacyPolicyModal = () => {
    const [showModal, setShowModal] = useState(false);

    // Función para cerrar el modal
    const closeModal = () => setShowModal(false);

    return (
        <>
            {/* Botón para abrir el modal */}
            <a
                type="button"
                className="link-dark"
                onClick={() => setShowModal(true)}
            >
                Política de privacidad
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
                                <div className="modal-header d-flex justify-content-center align-items-center">
                                    <h5 className="modal-title text-danger" id="exampleModalCenterTitle">
                                    🙊🙉🙈 Política de privacidad 🙈🙉🙊
                                    </h5>
                                </div>
                                <div className="modal-body">
                                    <h5>Política de boletines</h5>
                                    <p>
                                        Si te suscribes a nuestro boletín, prometemos no enviarte memes...
                                        bueno, tal vez alguno de gatos. Además:
                                    </p>
                                    <p>
                                        Solo enviamos eventos chulos, nada de spam. Si algo te parece spam,
                                        es que tienes el filtro del "meh" demasiado sensible.
                                    </p>
                                    <p>
                                        Puedes darte de baja cuando quieras, pero lloraremos un poco por dentro.
                                    </p>
                                    <h5>Privacidad (sí, también cuidamos eso)</h5>
                                    <p>
                                        Tu información está segura con nosotros. No la venderemos ni usaremos
                                        para invitarte a eventos sospechosos.
                                    </p>
                                    <p>
                                        Aunque si alguna vez creamos un festival de memes, te enviaremos una invitación.
                                    </p>
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-outline-danger"
                                        onClick={closeModal}
                                    >
                                        Acepto
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

export default PrivacyPolicyModal;

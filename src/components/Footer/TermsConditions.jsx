import React, { useState } from "react";

const TermsConditionsModal = () => {
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
                Términos y condiciones
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
                                        ✔️ Términos y condiciones ✍️
                                    </h5>
    
                                </div>
                                <div className="modal-body">
                                    <h5>Aceptación de términos</h5>
                                    <p>
                                        Al usar esta web, reconoces que tienes buen gusto para el ocio y que aceptas estos términos:
                                    </p>
                                    <p>
                                        No intentes hackear nuestra página para conseguir entradas gratis.
                                    </p>
                                    <p>
                                        Sí puedes usarla mientras comes palomitas, pero no nos hacemos responsables de migas en tu teclado.
                                    </p>
                                    <p>
                                        No uses nuestros contenidos para crear un evento clandestino. Eso ya es muy 2005.
                                    </p>
                                    <p>
                                        No garantizamos que cada evento sea "el mejor de tu vida". Eso depende de cuánto baile, rías o te atrevas a salir de casa.
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

export default TermsConditionsModal;

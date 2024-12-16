import "./Carousel.css"
export default function Carousel() {
    return (
        /* Hero Section con Carousel */
        <div className="carousel slide" data-bs-ride="carousel" >
            {/* Contenido del Carousel */}
            < div id = "carouselExample" className = "carousel slide" >
                <div className="carousel-inner">
                    {/* Img1 */}
                    <div className="carousel-item active">
                        <img
                            src="/img/image1.jpg"
                            className="d-block w-100"
                            alt="First slide"
                        />
                    </div>
                    {/* Img2 */}
                    <div className="carousel-item">
                        <img
                            src="/img/image2.jpg"
                            className="d-block w-100"
                            alt="Second slide"
                        />
                    </div>
                    <div id="carouselExample" className="carousel slide"></div>
                    {/* Img3 */}
                    <div className="carousel-item">
                        <img
                            src="/img/image3.jpg"
                            className="d-block w-100"
                            alt="Third slide"
                        />
                    </div>
                    {/* Img4 */}
                    <div className="carousel-item">
                        <img
                            src="/img/image4.jpg"
                            className="d-block w-100"
                            alt="Four slide"
                        />
                    </div>
                </div>
            </div >
    
        <div className="footer-overlay">
            <div className="carousel-caption lh-1 p-0 d-flex flex-column align-items-start justify-content-end">

                <p className="fs-2 mb-2">Texto carousel dinamico con opacidad</p>
                <a href="#" className="btn btn-danger">Ver más información</a>

            </div>
        </div>

    {/* Controles de navegación */}
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        
        </div >
    )
}
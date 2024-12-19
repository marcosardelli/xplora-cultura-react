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
            <div className="carousel-caption lh-1 p-0 d-flex flex-column align-items-center justify-content-end">
                <p className="fs-1 mb-0">BIENVENIDO A XPLORA CULTURA</p>
            </div>
        </div>
        </div >
    )
}
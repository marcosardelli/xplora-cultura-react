import Carousel from "../components/Carousel"
import NewsLetter from "../components/NewsLetter"

export default function CommunityPage() {
    return(
        <>
        <div className="bg-light text-center mt-2">
        <div className="newsletter-section fs-5">
            <h2>Descubre lo mejor de tu ciudad con <span className="text-danger">XPLORA</span></h2>
            <h4>¡No queremos que te pierdas ningún evento!</h4>
            <p>
                Únete a nuestra comunidad y disfruta de una agenda llena de experiencias únicas diseñadas especialmente para ti.
            </p>
            <h3> Explora eventos en tus categorías favoritas🔍</h3>
            <ul className="list-unstyled fs-5 d-flex gap-4 d-flex justify-content-center">
                <li>🎨 Arte</li>
                <li>🎵 Música</li>
                <li>🎭 Cultura</li>
                <li>🏃‍♂️ Deporte</li>
                <li>🌍 Naturaleza</li>
                <li>🎉 Folclore</li>
            </ul>
            <h3>Ventajas exclusivas para suscriptores✨</h3>
            <ul className="list-unstyled fs-5">
                <li>🏆 Sé el primero en enterarte de las actividades más emocionantes.</li>
                <li>📨 Recibe ofertas y recomendaciones personalizadas según tus intereses.</li>
                <li>👯 Conecta con personas afines para crear momentos inolvidables.</li>
            </ul>
            <p>
                <strong>¿Qué esperas?</strong> Suscríbete ahora y comienza a vivir tu ciudad de una manera diferente.
            </p>
            <p>
            <strong>¡Es gratis y está hecho para ti!</strong>
            </p>
            </div>
        </div>
        <NewsLetter/>
        <Carousel/>
        </>
    )
}
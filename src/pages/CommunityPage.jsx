import Carousel from "../components/Carousel"
import NewsLetter from "../components/NewsLetter"

export default function CommunityPage() {
    return(
        <>
        <div class="bg-light text-center m-0 p-3">
            <h2 class="text-secondary">
                ¡No queremos que te pierdas ninguno de los eventos que hemos preparado para ti! 
                Únete a nuestra comunidad, 
                <span class="text-danger">XPLORA</span> tu ciudad con nosotros y conecta con nuevas personas para disfrutar juntos.
            </h2>
        </div>
        <NewsLetter class="bg-light"/>
        <Carousel></Carousel>
        </>
    )
}
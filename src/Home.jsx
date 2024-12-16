import Carousel from "./components/Carousel";
import NewsLetter from "./components/NewsLetter";



export default function Home() {

    return (
        <>
            <Carousel/>
            {/* Menú de fechas y categorías */}
            <div>
                {/*
                <DateEvents @updateFilteredDates="filterByDate" />
                <Categories:data="dataIni" @updateCards="filterByCategory" />
                */}
            </div>
            {/* Sección de eventos */}
            <section class="container">
                <div id="content-events" class="row g-4">
                    {/*CardInfo
                        v-for="event in filteredEvents"
                        :key="event.id"
                        :title="event.titulo"
                        :category="event.categoria"
                        :dates="event.fechas"
                        :img="event.img.card"
                        :id="event.id"
                    /*/}
                    { filteredEvents.length===0?(<p class="text-center fs-4 text-secondary">No hay eventos disponibles con las características seleccionadas.</p>) : (<></>) }
                </div>
            </section>
            <section>
                <NewsLetter />
            </section>
        </>
    )

}


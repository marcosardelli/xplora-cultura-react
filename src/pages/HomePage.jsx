import Carousel from "../components/Carousel";
import NewsLetter from "../components/NewsLetter";
import EventList from "../components/EventList";



export default function HomePage() {

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
                <EventList/>
                    {/* { filteredEvents.length===0?(<p class="text-center fs-4 text-secondary">No hay eventos disponibles con las características seleccionadas.</p>) : (<></>) } */}
                </div>
            </section>
            <section>
                <NewsLetter />
            </section>
        </>
    )

}


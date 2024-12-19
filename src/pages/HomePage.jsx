import { useState, useEffect } from "react";
import Carousel from "../components/Carousel";
import EventList from "../components/EventList";
import CategoriesFilter from "../components/Filters/CategoriesFilter";
import DateFilter from "../components/Filters/DateFilter";
import NewsLetter from "../components/NewsLetter";
import DataService from "../dataService";
import { filterEventsByDate, filterEventsByCategory } from "../logic/logicEvent";

const dataService = new DataService(); // Instancia fuera del componente

export default function HomePage() {
  const [dataIni, setDataIni] = useState([]); // Todos los eventos cargados desde la API
  const [filteredEvents, setFilteredEvents] = useState([]); // Eventos filtrados
  const [currentCategory, setCurrentCategory] = useState("TODOS"); // Categoría activa
  const [currentDateFilter, setCurrentDateFilter] = useState("HOY"); // Filtro de fecha activo

  // Cargar eventos al montar el componente
  useEffect(() => {
    dataService.getAllEvents((items) => {
      setDataIni(items);

      setFilteredEvents(filterEventsByDate(items, "HOY"));

    });
  }, []); // Array vacío para ejecutarse solo una vez al montar

  // Filtrar eventos cuando cambien los filtros
  useEffect(() => {
    const filteredByDate = filterEventsByDate(dataIni, currentDateFilter);
    const filteredByCategory = filterEventsByCategory(filteredByDate, currentCategory);
    setFilteredEvents(filteredByCategory);
  }, [dataIni, currentCategory, currentDateFilter]);

  // Función para actualizar el filtro de fecha
  const filterByDate = (filter) => setCurrentDateFilter(filter);

  // Función para actualizar el filtro de categoría
  const filterByCategory = (category) => setCurrentCategory(category);

  return (
    <>
      <Carousel />
      {/* Menú de fechas y categorías */}
      <div>
        <DateFilter updateFilteredDates={filterByDate} />
        <CategoriesFilter updateCards={filterByCategory} />
      </div>
      {/* Sección de eventos */}
      <section className="container">
        <div id="content-events" className="row g-4">
          {filteredEvents.length === 0 ? (
            <p className="text-center fs-4 text-secondary">
              No hay eventos disponibles con las características seleccionadas.
            </p>
          ) : (
            <EventList events={filteredEvents} />
          )}
        </div>
      </section>
      <section>
        <NewsLetter />
      </section>
    </>
  );
}
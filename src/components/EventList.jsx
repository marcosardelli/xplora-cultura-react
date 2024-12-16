import { useState, useEffect } from "react";
import EventCard from "./EventCard";
import DataService from "../dataService";

const EventList = () => {
  const [events, setEvents] = useState([]);
  const dataService = new DataService();

  useEffect(() => {
    dataService.getAllEvents((data) => {
      setEvents(data); 
    });
  }, [dataService]);

  return (
    <div className="row">
      {/* Renderiza EventCard por cada evento del json */}
      {events.map((event) => (
        <EventCard
          key={event.id}
          title={event.titulo} 
          category={event.categoria} 
          dates={event.fechas} 
          img={event.img.card} 
          id={event.id}
        />
      ))}
    </div>
  );
};

export default EventList;

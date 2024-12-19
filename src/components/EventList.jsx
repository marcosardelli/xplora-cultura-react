import React from "react";
import EventCard from "./EventCard";

const EventList = ({ events }) => {
  return (
    <div className="row g-4">
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
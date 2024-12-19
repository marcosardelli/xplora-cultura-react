export const useAvailableDays = (fechas) => {
  if (!fechas || fechas.length === 0) return "No disponible";

  const days = fechas.map((fecha) => new Date(fecha.inicio).getDate());
  return days.join(", ").replace(/, (?=[^,]*$)/, " y ");
};

export const useSingleTime = (fechas) => {
  if (!fechas || fechas.length === 0) return "No disponible";

  const fecha = new Date(fechas[0].inicio);
  return fecha.toLocaleTimeString("es-ES", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const filterEventsByDate = (events, filter) => {
  const now = new Date();
  const dayOfWeek = now.getDay();
  const saturday = new Date(now);
  saturday.setDate(now.getDate() + (6 - dayOfWeek));
  const sunday = new Date(saturday);
  sunday.setDate(saturday.getDate() + 1);

  return events.filter((event) => {
    return event.fechas.some((fecha) => {
      const eventDate = new Date(fecha.inicio);
      switch (filter) {
        case "HOY":
          return (
            eventDate.getDate() === now.getDate() &&
            eventDate.getMonth() === now.getMonth() &&
            eventDate.getFullYear() === now.getFullYear()
          );
        case "FIN DE SEMANA":
          return (
            eventDate.toDateString() === saturday.toDateString() ||
            eventDate.toDateString() === sunday.toDateString()
          );
        case "ESTE MES":
          return (
            eventDate.getMonth() === now.getMonth() &&
            eventDate.getFullYear() === now.getFullYear()
          );
        case "ESTE AÑO":
          return eventDate.getFullYear() === now.getFullYear();
        default:
          return true;
      }
    });
  });
};

export const filterEventsByCategory = (events, category) => {
  if (category === "TODOS") {
    return events;
  }
  return events.filter((event) => event.categoria === category);
};

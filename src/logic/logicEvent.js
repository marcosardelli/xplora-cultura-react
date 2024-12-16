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

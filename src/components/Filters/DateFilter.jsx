import { useState } from "react";
import "./DateFilter.css"; // Archivo CSS para estilos

const DateFilter = ({ updateFilteredDates }) => {
  const filters = ["HOY", "FIN DE SEMANA", "ESTE MES", "ESTE AÑO"];
  const [selectedFilter, setSelectedFilter] = useState("HOY");

  const filterByDate = (filter) => {
    setSelectedFilter(filter);
    updateFilteredDates(filter); // Emitir evento al componente principal
  };

  return (
    <ul className="nav justify-content-center">
      {filters.map((filter) => (
        <li className="nav-item" key={filter}>
          <a
            href="#"
            className={`nav-link datefilter fs-2 text-secondary ${selectedFilter === filter ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault(); // Evitar navegación
              filterByDate(filter);
            }}
          >
            {filter === "ESTE AÑO" ? "2024" : filter.replace("_", " ")}
          </a>
        </li>
      ))}
    </ul>
  );
};


export default DateFilter;

import { useState } from "react";
import "./CategoriesFilter.css"; // Archivo CSS para los estilos

const CategoriesFilter = ({ updateCards }) => {
  const categories = [
    "TODOS",
    "Naturaleza",
    "Música",
    "Arte",
    "Deporte",
    "Cultura",
    "Folclore",
  ];

  const [selectedCategory, setSelectedCategory] = useState("TODOS");

  const filterByCategory = (category) => {
    setSelectedCategory(category);
    updateCards(category); // Emitir evento al componente principal
  };

  return (
    <ul className="nav nav-underline mb-1 justify-content-center pointer">
      {categories.map((category) => (
        <li className="nav-item" key={category}>
          <a
            className={`nav-link fs-5 categoriesFilter ${selectedCategory === category ? "active" : ""} ${category.toLowerCase()}`}
            onClick={() => filterByCategory(category)}
          >
            {category}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default CategoriesFilter;

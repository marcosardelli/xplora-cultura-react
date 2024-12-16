class DataService {
  getData(url, callback) {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        callback(json);
      });
  }
  //Para Vite, puedes acceder a los archivos en public/json/ sin necesidad de import.meta.env.VITE_BASE_URL
  // Método para obtener todos los eventos
  getAllEvents(callback) {
    this.getData("/json/events.json", callback);
  }

  // Método para obtener un videos para carousel
  getCarousel(id, callback) {
    this.getData("/json/carousel.json", callback);
  }

  // Método para obtener las categorías
  getCategs(callback) {
    this.getData("/json/categs.json", callback);
  }
}

export default DataService;

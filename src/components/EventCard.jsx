// import { useNavigate } from "react-router-dom";
import { useAvailableDays, useSingleTime } from "./logicEvent.js";
import './EventCard.css'

const EventCard = ({ title, category, dates, img, id }) => {


  const availableDays = useAvailableDays(dates);
  const singleTime = useSingleTime(dates);

  // pendiente incluir useNavigate para eventos detallados
  // const navigate = useNavigate();
  // const handleDirect = () => {
  //   navigate(`/events/${id}`);
  // };

  return (
    <div className="col-md-4 mb-2">
        {/* penidente de incluir useNavigate onClick={handleDirect} */}
      <div className="card border hand p-0"  id={id}>
        <img
          className="card-img-top"
          src={img}
          alt={`${title} ${category}`}
        />
        <span className={`decoration_bottom ${category}`}></span>
        <div className="card-body px-4">
          <h5 className="card-title ellipsis">{title}</h5>
          <p className={`card-subtitle categoryColor-${category}`}>
            {category}
          </p>
          <p className="card-dates m-0">Días: {availableDays}</p>
          <p className="card-time m-0">Horario: {singleTime}</p>

        </div>
      </div>
    </div>
  );
};

export default EventCard;
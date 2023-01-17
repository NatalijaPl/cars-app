import { Link } from "react-router-dom";

export const CarDetail = ({
  brand,
  model,
  year,
  maxSpeed,
  isAutomatic,
  engine,
  numberOfDoors,
  id,
}) => {
  return (
    <div>
      <p>
        {brand} {model} {year} {maxSpeed} {isAutomatic} {engine} {numberOfDoors}
      </p>
      <button>
        <Link to={`/edit/${id}`}>Edit</Link>
      </button>
    </div>
  );
};

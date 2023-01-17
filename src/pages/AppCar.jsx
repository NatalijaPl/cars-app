import React from "react";
import { useState, useEffect } from "react";
import { carService } from "../services/CarService";
import { CarDetail } from "../components/CarDetail.component";

export const AppCar = () => {
  const [carList, setCarList] = useState([]);

  const handleGetCars = async () => {
    const { data } = await carService.getAll();
    setCarList(data);
  };

  useEffect(() => {
    handleGetCars();
  }, []);

  const handleDelete = async (id) => {
    const data = await carService.delete(id);
    if (data.count) {
      setCarList(carList.filter((post) => post.id !== id));
    }
  };

  return (
    <div>
      <p>Car information: </p>
      <ul>
        {carList.map((car) => (
          <li key={car.id}>
            <CarDetail
              id={car.id}
              brand={car.brand}
              model={car.model}
              year={car.year}
              maxSpeed={car.maxSpeed}
              isAutomatic={car.isAutomatic}
              engine={car.engine}
              numberOfDoors={car.numberOfDoors}
            />
            <button onClick={() => handleDelete(car.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

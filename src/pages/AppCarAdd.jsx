import { useState } from "react";
import { carService } from "../services/CarService";

export const AppCarAdd = () => {
  const [newCar, setNewCar] = useState({
    brand: "",
    model: "",
    year: "",
    maxSpeed: "",
    isAutomatic: "",
    engine: "",
    numberOfDoors: "",
  });
  const handleAdd = async (e) => {
    e.preventDefault();
    if (
      newCar.brand &&
      newCar.model &&
      newCar.year &&
      newCar.maxSpeed &&
      newCar.isAutomatic &&
      newCar.engine &&
      newCar.numberOfDoors
    ) {
      const createdCar = {
        ...newCar,
        id: Math.floor(Math.random() * 100),
      };
      setNewCar(createdCar);
    }
  };
  const resetForm = () => {
    setNewCar("");
  };
  return (
    <div>
      <form onSubmit={handleAdd}>
        <label>
          brand:
          <input
            type="text"
            value={newCar.brand}
            onChange={(e) => {
              setNewCar({ ...newCar, brand: e.target.value });
            }}
          />
        </label>
        <br />
        <br />
        <label>
          model:
          <input
            type="text"
            value={newCar.model}
            onChange={(e) => {
              setNewCar({ ...newCar, model: e.target.value });
            }}
          />
        </label>
        <br />
        <br />
        <label>
          year:
          <select name="years" id="years">
            {[...new Array(29)].map((el, index) => (
              <option value={index + 1990} key={index}>
                {index + 1990}
              </option>
            ))}
          </select>
        </label>
        <br />
        <br />
        <label>
          maxSpeed:
          <input
            type="number"
            value={newCar.maxSpeed}
            onChange={(e) => {
              setNewCar({ ...newCar, maxSpeed: e.target.value });
            }}
          />
        </label>
        <br />
        <br />
        <label>
          numberOfDoors:
          <input
            type="number"
            value={newCar.numberOfDoors}
            onChange={(e) => {
              setNewCar({ ...newCar, numberOfDoors: e.target.value });
            }}
          />
        </label>
        <br />
        <br />
        <label>engine: </label>
        <br />
        <input
          type="radio"
          value={newCar.engine}
          onChange={(e) => {
            setNewCar({ ...newCar, engine: e.target.value });
          }}
        />
        <label>diesel</label>
        <input
          type="radio"
          value={newCar.engine}
          onChange={(e) => {
            setNewCar({ ...newCar, engine: e.target.value });
          }}
        />
        <label>petrol</label>
        <input
          type="radio"
          value={newCar.engine}
          onChange={(e) => {
            setNewCar({ ...newCar, engine: e.target.value });
          }}
        />
        <label>electric</label>
        <input
          type="radio"
          value={newCar.engine}
          onChange={(e) => {
            setNewCar({ ...newCar, engine: e.target.value });
          }}
        />
        <label>hybrid</label>
        <br />
        <br />
        <button type="submit" onClick={handleAdd}>
          Submit
        </button>
        <br />
        <br />
        <button type="reset" value="Reset" onClick={() => resetForm()}>
          Reset
        </button>
      </form>
    </div>
  );
};

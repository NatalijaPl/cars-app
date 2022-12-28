import { useState } from "react";
import { carService } from "../services/CarService";

export const AppCarAdd = () => {
  const [newCar, setNewCar] = useState({
    brand: "",
    model: "",
    year: "",
    maxSpeed: "",
    isAutomatic: false,
    engine: "",
    numberOfDoors: "",
  });

  const handleAdd = async (e) => {
    e.preventDefault();
    await carService.createCar(newCar);
    setNewCar(newCar);
  };
  const resetForm = () => {
    setNewCar("");
  };
  const handleClick = () => {
    alert(
      newCar.brand +
        " " +
        newCar.model +
        " " +
        newCar.maxSpeed +
        " " +
        newCar.numberOfDoors
    );
  };
  return (
    <div>
      <form onSubmit={handleAdd}>
        <label>
          brand:
          <input
            type="text"
            minLength={2}
            required
            value={newCar.brand || ""}
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
            minLength={2}
            required
            value={newCar.model || ""}
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
              <option required value={index + 1990} key={index}>
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
            value={newCar.maxSpeed || ""}
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
            required
            value={newCar.numberOfDoors || ""}
            onChange={(e) => {
              setNewCar({ ...newCar, numberOfDoors: e.target.value });
            }}
          />
        </label>
        <br />
        <br />
        <label>engine: </label>
        <br />
        <label>diesel</label>
        <input
          type="radio"
          required
          value="diesel"
          onChange={(e) => {
            setNewCar({ ...newCar, engine: e.target.value });
          }}
        />
        <br />
        <label>petrol</label>
        <input
          type="radio"
          required
          value="petrol"
          onChange={(e) => {
            setNewCar({ ...newCar, engine: e.target.value });
          }}
        />
        <br />
        <label>electric</label>
        <input
          type="radio"
          required
          value="electric"
          onChange={(e) => {
            setNewCar({ ...newCar, engine: e.target.value });
          }}
        />
        <br />
        <label>hybrid</label>
        <input
          type="radio"
          required
          value="hybrid"
          onChange={(e) => {
            setNewCar({ ...newCar, engine: e.target.value });
          }}
        />
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
        <br />
        <br />
        <button onClick={handleClick}>Preview</button>
      </form>
    </div>
  );
};

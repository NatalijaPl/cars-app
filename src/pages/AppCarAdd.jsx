import { useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
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

  const history = useHistory();
  const { id } = useParams();

  const handleAdd = async (e) => {
    e.preventDefault();
    let data = null;

    if (id) {
      data = await carService.edit(id, newCar);
    } else {
      data = await carService.add(newCar);
    }

    if (!data) {
      alert("The new car is not created");
      return;
    }

    history.push("/cars");
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
      <p>{id ? "Edit" : "Add new"} </p>
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
        <button>{id ? "Edit" : "Add"}</button>
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

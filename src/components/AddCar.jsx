import React, { useState } from "react";
import CarList from "./CarList";

const AddCar = () => {
  const [cars, setCars] = useState([]);

  const [carDetails, setCarDetails] = useState({
    brand: "",
    model: "",
    name: "",
    quantity: 1,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const existingCarIndex = cars.findIndex(
        (car) =>
          car.brand === carDetails.brand && car.model === carDetails.model
      );
      console.log("Index", existingCarIndex);
      if (existingCarIndex !== -1) {
        const updatedCars = [...cars];
        updatedCars[existingCarIndex].quantity += carDetails.quantity;
        setCars(updatedCars);
      } else {
        setCars([...cars, carDetails]);
      }
      setCarDetails({
        brand: "",
        model: "",
        name: "",
        quantity: 1,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label>Brand :</label>
        <input
          type="text"
          placeholder="Brand Name...."
          className="p-1 bg-slate-200 border-solid-1"
          value={carDetails.brand}
          onChange={(e) => {
            setCarDetails({ ...carDetails, brand: e.target.value });
          }}
        />
        <label>Model :</label>
        <input
          type="text"
          placeholder="Model Name...."
          className="p-1 bg-slate-200"
          value={carDetails.model}
          onChange={(e) => {
            setCarDetails({ ...carDetails, model: e.target.value });
          }}
        />
        <label>Name :</label>
        <input
          type="text"
          placeholder="Name...."
          className="p-1 bg-slate-200"
          value={carDetails.name}
          onChange={(e) => {
            setCarDetails({ ...carDetails, name: e.target.value });
          }}
        />

        <input
          className="p-2 border bg-red-500"
          type="submit"
          value={"submit"}
        />
      </form>

      <CarList cars={cars} />
    </>
  );
};

export default AddCar;

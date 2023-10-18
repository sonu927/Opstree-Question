import React from "react";

const CarList = ({ cars }) => {
  return (
    <>
      <h1 className="text-xl">Cars-List</h1>
      <div>
        {cars.length === 0 ? (
          "No Cars Found"
        ) : (
          <div>
            {cars.map((car) => {
              return (
                <>
                  <div>
                    <p>Car-Name : {car.name}</p>
                    <p>Car-Brand : {car.brand}</p>
                    <p>Car-Model : {car.model}</p>
                    <p>Car-Quantity : {car.quantity}</p>
                  </div>
                  <hr />
                </>
              );
            })}
          </div>
        )}
      </div>
      {/* <div>
        {carsList.map((car) => {
          return (
            <div>
              <p>Car-Name : {car.name}</p>
              <p>Car-Brand : {car.brand}</p>
              <p>Car-Model : {car.model}</p>
              <p>Car-Quantity : {car.quantity}</p>
            </div>
          );
        })}
      </div> */}
    </>
  );
};

export default CarList;

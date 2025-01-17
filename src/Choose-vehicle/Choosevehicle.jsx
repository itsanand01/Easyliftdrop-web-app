import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import Orders from "../Components/Orders";

function Choosevehicle() {
  const [activeCard, setActiveCard] = useState(null); // Track which card is active

  const cars = [
    {
      id: 1,
      name: "Mercedes-Benz",
      transmission: "Automatic",
      seats: "5 seats",
      type: "G class",
      rating: "4.2",
      reviews: "371 reviews",
      image: "/assets/car-img.png",
    },
    {
      id: 2,
      name: "BMW X5",
      transmission: "Automatic",
      seats: "5 seats",
      type: "SUV",
      rating: "4.5",
      reviews: "280 reviews",
      image: "/assets/car-img.png",
    },
  ];

  const handleClick = (id) => {
    setActiveCard(activeCard === id ? null : id); // Toggle active state
  };

  return (
    <div className="flex h-full">
      <Sidebar />
      <div className="flex-grow pt-3">
        <div className="bg-red-700 text-white p-2 text-center">
          Go Extra Mile With EasyliftDrop
        </div>
        <div className=" lg:flex gap-10 ">
          <div className="bg-white p-6 col-span-2">
            <div className="top-20 md:left-24 lg:left-32 w-full md:w-auto">
              <img
                src="/assets/Frame.png"
                alt="Frame"
                className="w-full md:w-auto h-auto"
              />
            </div>
            <div className="p-4 max-w-xl">
              <h1 className="font-bold pb-3">Choose Vehicle</h1>
              <div className="grid gap-4">
                {cars.map((car) => (
                  <div
                    key={car.id}
                    className={`border-2 p-4 rounded-md transition-all duration-300 ${
                      activeCard === car.id
                        ? "border-red-500 bg-red-100"
                        : "border-gray-300"
                    }`}
                    onClick={() => handleClick(car.id)}
                  >
                    <div className="md:flex justify-between items-center mb-2">
                      <h1 className="text-lg md:text-xl font-semibold font-sans">
                        {car.name}
                      </h1>
                      <div className="w-20 h-20 md:w-auto md:h-auto">
                        <img
                          src={car.image}
                          alt={`${car.name}`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                    <div className="flex gap-2 font-medium text-sm md:text-base -mt-4">
                      <p>{car.transmission}</p>
                      <p>|</p>
                      <p>{car.seats}</p>
                      <p>|</p>
                      <p>{car.type}</p>
                    </div>
                    <div className="pt-4 flex  w-full justify-between items-center mt-2">
                      <div className="md:flex gap-2 items-center">
                        <img
                          src="/assets/Star-icon.png"
                          alt="star"
                          className="w-4 h-4 md:w-5 md:h-5"
                        />
                        <p className="text-sm md:text-base">
                          {car.rating} ({car.reviews})
                        </p>
                      </div>
                      <button className="py-2 px-6 bg-red-500 font-semibold text-white rounded-lg hover:bg-black text-sm md:text-base">
                        Car Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 w-full flex justify-end ">
              <button className=" bg-red-600 px-7 py-3 rounded-lg font-sans font-semibold hover:text-white hover:bg-black">
                Submit Request
              </button>
            </div>
          </div>
          <Orders />{" "}
        </div>
      </div>
    </div>
  );
}

export default Choosevehicle;

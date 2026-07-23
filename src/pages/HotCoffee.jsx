// const HotCoffee = () => {
//   return (
//     <>
//       {/* <h1> HotCoffee </h1> */}
//       <div className="grid grid-cols-2">
//         <img src="/public/americano.png" />
//         <img src="/public/cappuccino.png" />
//         <img src="/public/espresso.png" />
//         <img src="/42843c3dee65af8192c8e8dab90e216e.jpg" />
//       </div>
//     </>
//   );
// };

// export default HotCoffee;

import { useState } from "react";
import Popup from "../components/Popup";
const coffeeData = [
  {
    id: 1,
    name: "Americano",
    price: "$4.99",
    image: "/americano.jpg",
    description: "Rich espresso blended with hot water for a smooth taste.",
  },
  {
    id: 2,
    name: "Cappuccino",
    price: "$5.99",
    image: "/cappuccino.jpg",
    description: "Espresso with steamed milk and creamy milk foam.",
  },
  {
    id: 3,
    name: "Espresso",
    price: "$3.99",
    image: "/Espresso.jpg",
    description: "A bold shot of freshly roasted premium coffee.",
  },
  {
    id: 4,
    name: "Latte",
    price: "$6.49",
    image: "/latte.jpg",
    description: "Smooth espresso mixed with silky steamed milk.",
  },
  {
    id: 5,
    name: "Mocha",
    price: "$6.99",
    image: "/mocha.jpg",
    description: "Chocolate, espresso and steamed milk combined.",
  },
  {
    id: 6,
    name: "Flat White",
    price: "$5.49",
    image:"/flat-white.jpg",
    description: "Velvety microfoam with a double shot of espresso.",
  },
];

const HotCoffee = () => {
  const [selectedCoffee, setSelectedCoffee] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {coffeeData.map((coffee) => (
        <div
          key={coffee.id}
          onClick={() => {
            console.log(selectedCoffee);

            setSelectedCoffee(coffee);
          }}
          className="bg-[#5b3a2f] rounded-2xl overflow-hidden shadow-lg hover:scale-105 duration-300"
        >
          <img
            src={coffee.image}
            alt={coffee.name}
            className="w-full h-[280px] object-cover"
          />

          <div className="p-5">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold text-white">{coffee.name}</h2>

              <span className="text-2xl font-bold text-[#d4a25a]">
                {coffee.price}
              </span>
            </div>

            <p className="text-gray-300 mt-3">{coffee.description}</p>
          </div>
        </div>
      ))}

      <Popup
        coffee={selectedCoffee}
        closePopup={() => setSelectedCoffee(null)}
      />
    </div>
  );
};

export default HotCoffee;

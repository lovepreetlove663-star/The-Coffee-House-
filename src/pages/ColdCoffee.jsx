// const ColdCoffee = () => {
//   return (
//     <>
//       <div className="grid grid-cols-2">
//         <img src="/public/cold coffee1.jpg" />
//         <img src="/public/cold coffee2.jpg" />
//         <img src="/public/cold coffee4.jpg" />
//         <img src="/public/cold coffee6.jpg" />
//         <img src="/public/cold coffee.png" />
//         <img src="/public/cold coffee7.jpg" />
//       </div>
//     </>
//   );
// };
import { useState } from "react";
import Popup from "../components/Popup";
const coldCoffeeData = [
  {
    id: 1,
    name: "Classic Cold Coffee",
    price: "$4.99",
    image: "/cop.jpg",
    description: "Refreshing chilled coffee blended with creamy milk.",
  },
  {
    id: 2,
    name: "Chocolate Cold Coffee",
    price: "$5.99",
    image: "/cold coffee1.jpg",
    description: "Rich chocolate blended with smooth cold coffee.",
  },
  {
    id: 3,
    name: "Caramel Cold Coffee",
    price: "$6.49",
    image: "/cold coffee11.jpg",
    description: "Sweet caramel mixed with freshly brewed cold coffee.",
  },
  {
    id: 4,
    name: "Mocha Frappe",
    price: "$6.99",
    image: "/cold coffee6.jpg",
    description: "A delicious blend of coffee, chocolate and ice.",
  },
  {
    id: 5,
    name: "Vanilla Cold Coffee",
    price: "$5.49",
    image: "/cold coffee.png",
    description: "Creamy vanilla flavored chilled coffee delight.",
  },
  {
    id: 6,
    name: "Hazelnut Cold Coffee",
    price: "$6.99",
    image: "/cold coffee7.jpg",
    description: "Premium hazelnut flavored cold coffee with ice.",
  },
];

const ColdCoffee = () => {
  const [selectedCoffee, setSelectedCoffee] = useState(null);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
      {coldCoffeeData.map((coffee) => (
        <div
          key={coffee.id}
          onClick={() => setSelectedCoffee(coffee)}
          className="bg-[#5b3a2f] rounded-2xl overflow-hidden shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
        >
          <img
            src={coffee.image}
            alt={coffee.name}
            className="w-full h-[250px] object-cover"
          />

          <div className="p-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-white">{coffee.name}</h2>

              <span className="text-lg font-bold text-[#d4a25a]">
                {coffee.price}
              </span>
            </div>

            <p className="text-gray-300 text-sm mt-2 leading-6">
              {coffee.description}
            </p>
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

export default ColdCoffee;

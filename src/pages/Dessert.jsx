// const Desserts = () => {
//   return (
//     <>
//       <div className="grid grid-cols-2">
//         <img src="/public/dessert3.jpg" />
//         <img src="/public/dessert4.jpg" />
//         <img src="/public/dessert5.jpg" />
//         <img src="/public/dessert6.jpg" />
//         <img src="/public/dessert7.jpg" />
//         <img src="/public/dessert1.jpg" />
//       </div>
//     </>
//   );
// };

// export default Desserts;

const dessertsData = [
  {
    id: 1,
    name: "Brownie Ice Cream",
    price: "$5.99",
    image: "/dessert3.jpg",
    description: "Warm chocolate brownie served with vanilla ice cream.",
  },
  {
    id: 2,
    name: "Chocolate Mousse",
    price: "$6.49",
    image: "/dessert4.jpg",
    description: "Rich chocolate mousse layered with brownie crumbs.",
  },
  {
    id: 3,
    name: "Chocolate Cone",
    price: "$4.99",
    image: "/dessert5.jpg",
    description: "Premium chocolate cone topped with rich chocolate.",
  },
  {
    id: 4,
    name: "Double Chocolate Sundae",
    price: "$5.49",
    image: "/dessert6.jpg",
    description: "Chocolate ice cream with whipped cream and syrup.",
  },
  {
    id: 5,
    name: "Chocolate Parfait",
    price: "$3.99",
    image: "/dessert7.jpg",
    description: "Creamy vanilla and chocolate parfait with caramel drizzle.",
  },
  {
    id: 6,
    name: "Chocolate Truffle Cake",
    price: "$6.99",
    image: "/dessert1.jpg",
    description: "Moist chocolate truffle cake with glossy ganache.",
  },
];
const Desserts = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
      {dessertsData.map((dessert) => (
        <div
          key={dessert.id}
          className="bg-[#5b3a2f] rounded-2xl overflow-hidden shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
        >
          {/* Image */}
          <img
            src={dessert.image}
            alt={dessert.name}
            className="w-full h-[250px] object-cover"
          />

          {/* Content */}
          <div className="p-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-white">{dessert.name}</h2>

              <span className="text-lg font-bold text-[#d4a25a]">
                {dessert.price}
              </span>
            </div>

            <p className="text-gray-300 text-sm mt-2 leading-6">
              {dessert.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Desserts;

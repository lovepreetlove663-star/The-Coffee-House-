// const Popup = () => {
//   return (
//     <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
//       <div className="bg-white w-96 h-96 rounded-xl">Popup</div>
//     </div>
//   );
// };

// export default Popup;

const Popup = ({ coffee, closePopup }) => {
  if (!coffee) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl p-6 w-[400px]">
        <button onClick={closePopup} className="text-2xl float-right">
          ✕
        </button>

        <img
          src={coffee.image}
          alt={coffee.name}
          className="w-full h-60 object-cover rounded-lg"
        />

        <h2 className="text-3xl font-bold mt-4">{coffee.name}</h2>
        <p className="mt-3">{coffee.description}</p>
        <h3 className="text-2xl text-[#9b6a3d] mt-3">{coffee.price}</h3>
      </div>
    </div>
  );
};

export default Popup;

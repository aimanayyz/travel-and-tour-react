function PackageCard({ image, title, duration, price }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">

      <img
        src={image}
        alt={title}
        className="w-full h-60 object-cover"
      />

      <div className="p-5">

        <h2 className="text-2xl font-bold">
          {title}
        </h2>

        <p className="text-gray-600 mt-2">
          Duration: {duration}
        </p>

        <h3 className="text-blue-600 font-bold mt-4">
          {price}
        </h3>

        <button className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
          Book Now
        </button>

      </div>

    </div>
  );
}

export default PackageCard;
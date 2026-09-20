function Card() {
  return (
    <div className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

      {/* Image */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          alt="Beautiful House"
          className="h-64 w-full object-cover"
        />

        {/* Badge */}
        <span className="absolute left-4 top-4 rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold text-white">
          Featured
        </span>

        {/* Heart */}
        <button className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-xl shadow-md hover:bg-white">
          ♡
        </button>
      </div>

      {/* Content */}
      <div className="p-6">

        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">
            Modern Dream House
          </h2>

          <span className="rounded-lg bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
            For Sale
          </span>
        </div>

        <p className="mb-4 text-gray-500">
          📍 Surat, Gujarat
        </p>

        <p className="mb-6 leading-relaxed text-gray-600">
          Beautiful modern house with spacious rooms, a large garden,
          premium interiors and excellent surroundings.
        </p>

        {/* Features */}
        <div className="mb-6 grid grid-cols-3 gap-3 border-y border-gray-200 py-4 text-center">

          <div>
            <p className="text-lg font-bold text-gray-900">4</p>
            <p className="text-sm text-gray-500">Bedrooms</p>
          </div>

          <div>
            <p className="text-lg font-bold text-gray-900">3</p>
            <p className="text-sm text-gray-500">Bathrooms</p>
          </div>

          <div>
            <p className="text-lg font-bold text-gray-900">2400</p>
            <p className="text-sm text-gray-500">Sq Ft</p>
          </div>

        </div>

        {/* Price + Rating */}
        <div className="mb-6 flex items-center justify-between">

          <div>
            <p className="text-sm text-gray-500">Price</p>
            <p className="text-2xl font-bold text-blue-600">
              ₹85 Lakhs
            </p>
          </div>

          <div className="text-right">
            <p className="text-yellow-500">
              ★★★★★
            </p>
            <p className="text-sm text-gray-500">
              4.9 / 5
            </p>
          </div>

        </div>

        {/* Buttons */}
        <div className="flex gap-3">

          <button className="flex-1 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700">
            View Details
          </button>

          <button className="rounded-xl border border-gray-300 px-5 py-3 font-semibold text-gray-700 transition hover:bg-gray-100">
            Contact
          </button>

        </div>

      </div>
    </div>
  );
}

export default Card;
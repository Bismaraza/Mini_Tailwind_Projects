import Apartment from "../assets/apartment.jpg";

function Airbnb_Listing() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">

      <div className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-md">

  
        <div>

          <img
            src={Apartment}
            alt="Modern Apartment"
            className="h-64 w-full object-cover"
          />

        </div>

   
        <div className="p-5">


          <div className="flex items-center justify-between">

            <h2 className="text-lg font-semibold text-gray-900">
              Modern Apartment
            </h2>

            <span className="text-sm font-medium text-gray-700">
              ★ 4.9
            </span>

          </div>


          <p className="mt-1 text-gray-500">
            Lahore, Pakistan
          </p>

  
          <p className="mt-3 text-sm text-gray-500">
            2 beds • 1 bath • 4 guests
          </p>


          <div className="mt-4">

            <span className="text-xl font-bold text-gray-900">
              $85
            </span>

            <span className="text-gray-500">
              / night
            </span>

          </div>


          <button className="mt-4 w-full rounded-lg bg-black px-4 py-3 font-semibold text-white transition hover:bg-gray-800">
            Reserve
          </button>

        </div>

      </div>

    </div>
  );
}

export default Airbnb_Listing;
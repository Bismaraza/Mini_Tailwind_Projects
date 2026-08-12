import Bisma from "../assets/Bisma.png";

function Github_User_Card() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">


      <div className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-lg">

        <div className="px-6 pb-6">

  
          <div className="flex justify-center">
            <img
              src={Bisma}
              alt="Bisma Raza"
              className="h-28 w-28 rounded-full border-4 border-white object-cover"
            />
          </div>

  
          <div className="mt-4 text-center">

            <h1 className="text-2xl font-bold text-gray-900">
              Bisma Raza
            </h1>

            <p className="mt-1 text-gray-500">
              @bisma-raza
            </p>

            <p className="mt-4 text-gray-600">
              Frontend Developer building with React and Tailwind CSS.
            </p>

          </div>


          <div className="mt-6 grid grid-cols-3 border-y border-gray-200 py-4">

            <div className="text-center">
              <p className="font-bold text-gray-900">
                24
              </p>

              <p className="text-sm text-gray-500">
                Repositories
              </p>
            </div>

            <div className="text-center">
              <p className="font-bold text-gray-900">
                180
              </p>

              <p className="text-sm text-gray-500">
                Followers
              </p>
            </div>

            <div className="text-center">
              <p className="font-bold text-gray-900">
                95
              </p>

              <p className="text-sm text-gray-500">
                Following
              </p>
            </div>

          </div>


          <div className="mt-6 flex justify-center gap-4">

            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
              React
            </span>

            <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm text-yellow-700">
              JavaScript
            </span>

            <span className="rounded-full bg-cyan-100 px-3 py-1 text-sm text-cyan-700">
              Tailwind
            </span>

          </div>


          <button
            className="mt-6 w-full rounded-lg bg-gray-900 px-4 py-3 font-semibold text-white transition hover:bg-gray-700"
          >
            View GitHub Profile
          </button>

        </div>

      </div>

    </div>
  );
}

export default Github_User_Card;
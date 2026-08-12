import Bisma from "../assets/Bisma.png";

function Linkedin_Card() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10">
      <div className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-lg">
            
        <div className="px-6 pb-6">

          <div className=" flex justify-center">
            <img
              src={Bisma}
              alt="Bisma Raza"
              className="h-38 w-38 rounded-full border-4 border-blue-600 object-cover"
            />
          </div>

          <div className="mt-4 text-center">
            <h1 className="text-2xl font-bold text-gray-900">Bisma Raza</h1>

            <p className="mt-1 text-gray-500">
              Frontend Developer Intern at Arcana Info{" "}
            </p>

            <p className="mt-1 text-sm text-gray-600">
              Software Engineering Student | WordPress & Shopify Developer
            </p>
          </div>

          <div className="mt-6 flex justify-center gap-8 border-y border-gray-200 py-4">
            <div className="text-center">
              <p className="font-bold text-gray-900">4,964</p>

              <p className="text-sm text-gray-500">Followers</p>
            </div>

            <div className="text-center">
              <p className="font-bold text-gray-900">500+</p>

              <p className="text-sm text-gray-500">Following</p>
            </div>

            <div className="text-center">
              <p className="font-bold text-gray-900">48</p>

              <p className="text-sm text-gray-500">Posts</p>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <button className="flex-1 rounded-lg bg-blue-600 px-4 py-2.5 font-semibold text-white transition hover:bg-blue-700">
              Connect
            </button>

            <button className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 font-semibold text-gray-700 transition hover:bg-gray-100">
              Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Linkedin_Card;

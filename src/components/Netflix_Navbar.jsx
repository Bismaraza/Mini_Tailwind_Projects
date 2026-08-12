

function Netflix() {
  return (
    <div className="min-h-screen bg-black text-white">
      <nav className=" sticky top-0 z-50 flex items-center justify-between py-5 px-6 bg-black/90">
        <h1 className="text-3xl font-bold text-red-600">NETFLIX</h1>
        <div className="flex gap-6">
          <a href="#" className="hover:text-gray-500 transition">
            Home
          </a>
          <a href="#" className="hover:text-gray-500 transition">
            TV Shows
          </a>
          <a href="#" className="hover:text-gray-500 transition">
            Movies
          </a>
          <a href="#" className="hover:text-gray-500 transition">
            New & Popular
          </a>
          <a href="#" className="hover:text-gray-500 transition">
            My List
          </a>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-2xl cursor-pointer "> 🔍</span>
          <span className=" text-2xl cursor-pointer">👤 </span>
        </div>
      </nav>
      
      <section className="flex min-h-[80vh] items-center px-6">
        <div className="max-w-xl">
          <p className="mb-3 text-sm font-semibold text-red-500">
            NETFLIX ORIGINAL
          </p>

          <h2 className="text-5xl font-black md:text-7xl">Stranger Things</h2>

          <p className="mt-5 text-gray-300">
            Watch your favorite movies and shows in one place.
          </p>

          <button className="mt-6 rounded-lg bg-white px-6 py-3 font-bold text-black hover:bg-gray-300">
            Play
          </button>
        </div>
      </section>
    </div>
  );
}

export default Netflix;

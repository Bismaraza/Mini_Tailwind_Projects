function App() {
  return (
    <div className="min-h-screen bg-gray-200">

      <div className="flex">

        {/* Sidebar */}
        <aside className="min-h-screen w-64 bg-white p-4 shadow-md">

          {/* Logo */}
          <h1 className="mb-6 text-2xl font-bold text-red-600">
            YouTube
          </h1>

          {/* Main Navigation */}
          <nav>
            <ul className="space-y-2">

              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-4 py-3 font-medium hover:bg-gray-100"
                >
                  <span>🏠</span>
                  <span>Home</span>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-4 py-3 font-medium hover:bg-gray-100"
                >
                  <span>🎬</span>
                  <span>Shorts</span>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-4 py-3 font-medium hover:bg-gray-100"
                >
                  <span>📺</span>
                  <span>Subscriptions</span>
                </a>
              </li>

            </ul>

            {/* Divider */}
            <hr className="my-5 border-gray-200" />

            {/* You Section */}
            <h2 className="mb-2 px-4 text-sm font-semibold text-gray-500">
              YOU
            </h2>

            <ul className="space-y-2">

              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-gray-100"
                >
                  <span>📜</span>
                  <span>History</span>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-gray-100"
                >
                  <span>👍</span>
                  <span>Liked Videos</span>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-gray-100"
                >
                  <span>▶️</span>
                  <span>Your Videos</span>
                </a>
              </li>

            </ul>

          </nav>
        </aside>


        {/* Main Content */}
        <main className="flex-1 p-8">

          {/* Header */}
          <h2 className="text-3xl font-bold text-gray-900">
            Recommended Videos
          </h2>

          <p className="mt-2 text-gray-500">
            Explore videos you might like.
          </p>


          {/* Dummy Video Cards */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-xl bg-white p-5 shadow">
              <div className="flex h-40 items-center justify-center rounded-lg bg-gray-200 text-4xl">
                ▶️
              </div>

              <h3 className="mt-4 font-bold">
                Learn React
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                React tutorial for beginners
              </p>
            </div>


            <div className="rounded-xl bg-white p-5 shadow">
              <div className="flex h-40 items-center justify-center rounded-lg bg-gray-200 text-4xl">
                ▶️
              </div>

              <h3 className="mt-4 font-bold">
                Learn Tailwind CSS
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Build beautiful interfaces faster.
              </p>
            </div>


            <div className="rounded-xl bg-white p-5 shadow">
              <div className="flex h-40 items-center justify-center rounded-lg bg-gray-200 text-4xl">
                ▶️
              </div>

              <h3 className="mt-4 font-bold">
                JavaScript Fundamentals
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Strengthen your JavaScript basics.
              </p>
            </div>

          </div>

        </main>

      </div>

    </div>
  );
}

export default App;
function Stripe_Pricing() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-16">


      <div className="mx-auto max-w-3xl text-center">

        <h1 className="text-4xl font-bold text-gray-900">
          Simple Pricing
        </h1>

        <p className="mt-4 text-gray-500">
          Choose the plan that works best for you.
        </p>

      </div>


      <div className="mx-auto mt-12 grid max-w-6xl gap-8 md:grid-cols-3">

 
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">

          <h2 className="text-xl font-bold text-gray-900">
            Starter
          </h2>

          <p className="mt-2 text-gray-500">
            For individuals getting started.
          </p>

          <div className="mt-6">
            <span className="text-4xl font-bold text-gray-900">
              $9
            </span>

            <span className="text-gray-500">
              /month
            </span>
          </div>

          <ul className="mt-6 space-y-3 text-gray-600">
            <li>✓ 5 Projects</li>
            <li>✓ Basic Analytics</li>
            <li>✓ Email Support</li>
          </ul>

          <button className="mt-8 w-full rounded-lg border border-gray-300 px-4 py-3 font-semibold text-gray-700 transition hover:bg-gray-100">
            Get Started
          </button>

        </div>



        <div className="relative rounded-2xl border-2 border-blue-600 bg-white p-8 shadow-lg">


          <span className="absolute right-5 top-5 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
            Popular
          </span>

          <h2 className="text-xl font-bold text-gray-900">
            Pro
          </h2>

          <p className="mt-2 text-gray-500">
            For growing teams and developers.
          </p>

          <div className="mt-6">
            <span className="text-4xl font-bold text-gray-900">
              $29
            </span>

            <span className="text-gray-500">
              /month
            </span>
          </div>

          <ul className="mt-6 space-y-3 text-gray-600">
            <li>✓ Unlimited Projects</li>
            <li>✓ Advanced Analytics</li>
            <li>✓ Priority Support</li>
          </ul>

          <button className="mt-8 w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700">
            Choose Pro
          </button>

        </div>


        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">

          <h2 className="text-xl font-bold text-gray-900">
            Business
          </h2>

          <p className="mt-2 text-gray-500">
            For larger businesses and teams.
          </p>

          <div className="mt-6">
            <span className="text-4xl font-bold text-gray-900">
              $79
            </span>

            <span className="text-gray-500">
              /month
            </span>
          </div>

          <ul className="mt-6 space-y-3 text-gray-600">
            <li>✓ Unlimited Projects</li>
            <li>✓ Team Management</li>
            <li>✓ Dedicated Support</li>
          </ul>

          <button className="mt-8 w-full rounded-lg border border-gray-300 px-4 py-3 font-semibold text-gray-700 transition hover:bg-gray-100">
            Contact Sales
          </button>

        </div>

      </div>

    </div>
  );
}

export default Stripe_Pricing;
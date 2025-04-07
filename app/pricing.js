export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white p-8 text-gray-800">
      <h1 className="text-4xl font-bold text-center mb-4">Pricing Plans</h1>
      <p className="text-center text-gray-600 mb-12">
        Choose the plan that fits your practice best. Start with a free basic listing or upgrade to reach more clients.
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-8 max-w-5xl mx-auto">
        {/* Free Plan */}
        <div className="border rounded-lg p-6 shadow-md w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-2">Free Basic Listing</h2>
          <p className="text-gray-600 mb-4">Great for getting started.</p>
          <ul className="space-y-2 mb-6">
            <li>✅ Verified CRPO status</li>
            <li>✅ Shown in client search results</li>
            <li>❌ No featured placement</li>
            <li>❌ No profile analytics</li>
          </ul>
          <button className="w-full border border-blue-600 text-blue-600 py-2 rounded hover:bg-blue-50 transition">
            Get Started Free
          </button>
        </div>

        {/* Featured Plan */}
        <div className="border-2 border-blue-600 rounded-lg p-6 shadow-xl w-full max-w-md bg-blue-50">
          <h2 className="text-2xl font-semibold mb-2 text-blue-800">Featured Listing</h2>
          <p className="text-gray-700 mb-4">Stand out and grow your client base.</p>
          <ul className="space-y-2 mb-6">
            <li>✅ Verified CRPO status</li>
            <li>✅ Featured placement in search results</li>
            <li>✅ Profile analytics (views, clicks)</li>
            <li>✅ Add booking links (Calendly, JaneApp, etc.)</li>
          </ul>
          <div className="text-3xl font-bold text-blue-800 mb-4">$15/month</div>
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
            Upgrade to Featured
          </button>
        </div>
      </div>
    </div>
  );
}

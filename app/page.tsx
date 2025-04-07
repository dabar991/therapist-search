export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-8 flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl font-bold text-blue-800 mb-4">
        Find a CRPO-Registered Counsellor in Ontario
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mb-8">
        TherapistSearch helps you connect with qualified, verified professionals to support your mental health journey — online or in person.
      </p>
      <div className="space-x-4">
        <a
          href="/search"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow hover:bg-blue-700 transition"
        >
          Search Therapists
        </a>
        <a
          href="/signup"
          className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl text-lg font-semibold hover:bg-blue-100 transition"
        >
          I'm a Counsellor
        </a>
      </div>
      <div className="mt-16 w-full max-w-4xl">
        <img
          src="https://images.unsplash.com/photo-1588776814546-5c3a4173e2a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
          alt="Therapist directory illustration"
          className="rounded-xl shadow-xl object-cover w-full h-[350px]"
        />
      </div>
    </main>
  );
}
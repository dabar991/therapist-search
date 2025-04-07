"use client";

import { useState } from "react";

const counsellors = [
  { name: "Jane Doe", city: "Toronto", specialty: "Anxiety" },
  { name: "John Smith", city: "Ottawa", specialty: "Depression" },
  { name: "Emily Green", city: "Toronto", specialty: "Couples Therapy" },
  { name: "Michael Brown", city: "Hamilton", specialty: "ADHD" },
];

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(counsellors);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const q = e.target.value.toLowerCase();
    setQuery(q);
    setResults(
      counsellors.filter(
        (c) =>
          c.city.toLowerCase().includes(q) ||
          c.specialty.toLowerCase().includes(q)
      )
    );
  };

  return (
    <div className="min-h-screen p-8 bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Search Counsellors</h1>
      <input
        type="text"
        placeholder="Enter city or specialty..."
        value={query}
        onChange={handleSearch}
        className="border p-2 rounded w-full max-w-md mb-6 shadow"
      />

      {results.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <ul className="space-y-4">
          {results.map((counsellor, index) => (
            <li
              key={index}
              className="p-4 border rounded-lg shadow hover:bg-blue-50"
            >
              <h2 className="text-xl font-semibold">{counsellor.name}</h2>
              <p>
                <strong>City:</strong> {counsellor.city}
              </p>
              <p>
                <strong>Specialty:</strong> {counsellor.specialty}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

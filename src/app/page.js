"use client";
import Image from "next/image";
import Button from "./components/Button";
import BottomBar from "./components/BottomBar";
import { useState, useEffect } from "react";
import axios from "axios";
import SkipCard from "./components/SkipCard";
import NavBar from "./components/NavBar";

export default function Home() {
  const [selectedSkip, setSelectedSkip] = useState(null);
  const [skipOptions, setSkipOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSkips = async () => {
      try {
        const response = await axios.get(
          "https://app.wewantwaste.co.uk/api/skips/by-location",
          {
            params: {
              postcode: "NR32",
              area: "Lowestoft",
            },
          }
        );
        setSkipOptions(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSkips();
  }, []);

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <main className="max-w-7xl mx-auto px-4 py-8">
        <NavBar />
        <div className=" pb-32">
          <h2 className="text-2xl font-bold text-center mb-4">
            Choose Your Skip Size
          </h2>
          <p className="text-gray-400 text-center mb-8">
            Select the skip size that best suits your needs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {skipOptions.map((skip) => (
              <SkipCard
                key={skip.id}
                isSelected={selectedSkip == skip}
                setSelectedSkip={setSelectedSkip}
                skip={skip}
              />
            ))}
          </div>
        </div>
        {selectedSkip && <BottomBar selectedSkip={selectedSkip} />}
      </main>
    </div>
  );
}

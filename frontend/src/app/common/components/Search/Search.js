import React, { useState, useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import debounce from "lodash/debounce"; // Import debounce from lodash
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false); // Track if results should be shown
  const router = useRouter();
  const searchResultsRef = useRef(null);

  // Debounce the fetchResults function
  const debouncedFetchResults = useCallback(
    debounce(async () => {
      setLoading(true);
      try {
        const encodedQuery = encodeURIComponent(query);
        const response = await fetch(
          `http://localhost:1337/api/cars?populate=*&filters[$or][0][Title][$contains]=${encodedQuery}&filters[$or][1][Body][$contains]=${encodedQuery}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch");
        }

        const data = await response.json();
        setResults(data);
        setLoading(false);
        setShowResults(true); // Show results after fetching
      } catch (error) {
        console.error({
          message: "Error fetching data from Strapi",
          error: error.message,
        });
      }
    }, 300), // Delay of 300ms (adjust as needed)
    [query]
  );

  useEffect(() => {
    // Clear previous debounce timer on unmount
    return () => {
      debouncedFetchResults.cancel();
    };
  }, [debouncedFetchResults]);

  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
      setShowResults(false); // Hide results if query is empty
      return;
    }

    debouncedFetchResults();
  }, [query, debouncedFetchResults]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchResultsRef.current &&
        !searchResultsRef.current.contains(event.target)
      ) {
        setShowResults(false);
      } else {
        if (event.target.classList.contains("searchField")) {
          debouncedFetchResults();
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full md:w-6/12 flex flex-col gap-4 mx-auto">
      <div>
        <input
          className={`${
            showResults && "relative z-[9999]"
          } p-4 px-7 searchField rounded-lg w-full border-4 focus:border-sky-500 focus:outline-none hover:border-sky-500 transition-all duration-150`}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Make, Model, or Keyword"
        />
        <div
          className={`fixed left-0 top-0 w-screen h-screen  ${
            showResults ? "z-50 opacity-40" : "-z-10 opacity-0"
          } transition-all duration-300  bg-black block`}
        >
          {/* background backdrop */}
        </div>
        {showResults && (
          <div>
            <div>
              <div className="relative z-50">
                <ul
                  ref={searchResultsRef}
                  className="absolute w-full rounded-lg overflow-hidden mt-3 shadow-lg duration-150 z-50 "
                >
                  {loading && <li className="bg-white p-5">Loading...</li>}
                  {results?.data?.length > 0 &&
                    results?.data.map((vehicle, idx) => {
                      return (
                        <li
                          key={vehicle.id}
                          onClick={() => router.push(`/vehicle/${vehicle.id}`)}
                          className="bg-white p-5 cursor-pointer transition-all duration-150 hover:bg-slate-200 hover:pe-4 "
                        >
                          <div className="flex justify-between items-center">
                            {/* search results copy */}
                            <div className="flex items-center justify-between gap-9">
                              <Image
                                className="rounded-full aspect-square"
                                unoptimized
                                src={`http://localhost:1337${vehicle.attributes.car_Image.data[0].attributes.url}`}
                                width={50}
                                height={50}
                                alt="car thumbnail"
                              />
                              <div className="text-2xl">
                                {vehicle.attributes.Title} - $
                                {vehicle.attributes.price}
                              </div>
                            </div>

                            {/* arrow button > */}
                            <div><FaChevronRight/></div>
                          </div>
                        </li>
                      );
                    })}
                  
                  {!loading && results?.data?.length === 0 && (
                    <li className="bg-white p-5">
                      No results found for "{query}".
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;

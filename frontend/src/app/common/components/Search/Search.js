import debounce from 'lodash/debounce'; // Import debounce from lodash
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
const Search = () => {
  const [query, setQuery] = useState('');
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
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/cars?populate=*&filters[$or][0][Title][$contains]=${encodedQuery}`,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        if (!response.ok) {
          throw new Error('Failed to fetch');
        }

        const data = await response.json();
        setResults(data);
        setLoading(false);
        setShowResults(true); // Show results after fetching
      } catch (error) {
        console.error({
          message: 'Error fetching data from Strapi',
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
    if (query.trim() === '') {
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
        if (event.target.classList.contains('searchField')) {
          debouncedFetchResults();
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full md:w-6/12 flex flex-col gap-4 mx-auto">
      <div>
        <input
          className={`${
            showResults && 'relative z-[9999]'
          } p-4 px-7 searchField rounded-full w-full border-4 focus:border-primary focus:outline-none hover:border-primary transition-all duration-150`}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for it here... Make, Model, or Keyword"
        />
        <div
          className={`fixed left-0 top-0 w-screen h-screen  ${
            showResults ? 'z-50 opacity-40' : '-z-10 opacity-0'
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
                          onClick={() =>
                            router.push(`/vehicle/${vehicle.documentId}`)
                          }
                          className="bg-white p-5 cursor-pointer transition-all duration-150 hover:bg-slate-200 hover:pe-4 "
                        >
                          <div className="flex justify-between items-center">
                            {/* search results copy */}
                            <div className="flex items-center justify-between gap-3">
                              <Image
                                className="rounded-md aspect-square object-cover"
                                unoptimized
                                src={`${process.env.NEXT_PUBLIC_BASE_URL}${vehicle?.car_Image[0]?.url}`}
                                width={80}
                                height={80}
                                alt="car thumbnail"
                              />
                              <div className="text-lg">
                                {vehicle?.Title} - ${vehicle?.price}
                              </div>
                            </div>

                            {/* arrow button > */}
                            <div>
                              <FaChevronRight />
                            </div>
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

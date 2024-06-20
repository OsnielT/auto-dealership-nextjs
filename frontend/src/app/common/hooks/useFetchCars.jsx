import { useState, useEffect } from "react";

async function getData() {
  const res = await fetch(
    "http://localhost:1337/api/cars/?populate=*&sort=featured:desc"
  );

  try {
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const jsonData = await res.json();

    return jsonData.data || []; // Ensure that we return an array, either the fetched data or an empty array.
  } catch (error) {
    console.log("ERROR: ", error);
  }

  return []; // Ensure that we return an array, either the fetched data or an empty array.
}

export default function useFetchCars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    async function fetchCars() {
      const fetchedCars = await getData();

      if (fetchedCars) {
        setCars(fetchedCars);
      } else {
        console.error("No data available");
        // Optionally set an error state and render an error message in the UI
      }
    }

    fetchCars();
  }, []);

  return cars;
}

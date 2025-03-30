import { useState, useEffect } from "react";
import client from "@/common/utils/apollo-client";
import { GET_CAR_BY_ID_QUERY } from "../constants/queries";

async function getCarData(id) {
  try {
    const { data } = await client.query({
      query: GET_CAR_BY_ID_QUERY,
      variables: { id }, // Pass the ID as a variable to the query
    });

    return data.car.data || null; // Return the car data or null if not found
  } catch (error) {
    console.log("ERROR: ", error);
    return null; // Return null if there's an error
  }
}

export default function useFetchCarById(id) {
  const [car, setCar] = useState(null);

  useEffect(() => {
    async function fetchCar() {
      if (id) {
        const results = await getCarData(id);

        if (results) {
          setCar(results);
        } else {
          console.error("No data available for the given ID");
        }
      }
    }

    fetchCar();
  }, [id]);

  return car;
}

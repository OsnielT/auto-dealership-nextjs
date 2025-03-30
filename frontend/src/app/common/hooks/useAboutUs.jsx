import { useState, useEffect } from "react";
import client from "@/common/utils/apollo-client";
import { GET_ABOUT_US } from "../constants/queries";

async function getData() {
  try {
    const { data } = await client.query({
      query: GET_ABOUT_US,
    });

    return data.aboutUs.data || [];
  } catch (error) {
    console.log("ERROR: ", error);
  }

  return [];
}

export default function useFetchAboutUs() {
  const [aboutUs, setAboutUs] = useState([]);

  useEffect(() => {
    async function fetchAboutUs() {
      const fetchedAboutUs = await getData();

      if (fetchedAboutUs) {
        setAboutUs(fetchedAboutUs);
      } else {
        console.error("No data available");
      }
    }

    fetchAboutUs();
  }, []);

  return aboutUs;
}

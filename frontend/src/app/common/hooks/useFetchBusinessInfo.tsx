
import { useEffect, useState } from "react";

async function getData() {
  try {
    const res = await fetch(
      "http://localhost:1337/api/company-information/?populate=*"
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const jsonData = await res.json();
    return jsonData.data || [];
  } catch (error) {
    console.log("ERROR: ", error);
    return []; // Return an empty array in case of error
  }
}

export default function useBusinessInfo() {
  const [businessInfo, setBusinessInfo] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const fetchedData = await getData();
      setBusinessInfo(fetchedData);
    }

    fetchData();
  }, []);

  return businessInfo;
}

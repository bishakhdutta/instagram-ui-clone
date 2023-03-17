import { useEffect, useState } from "react";

export const useApi = (link) => {
  if (link == "" || link == null) return [];
  const [jsonData, setjsonData] = useState([]);
  const [api,setApi]=useState(link);
  useEffect(() => {
    fetch(api, {
      headers: {
        "app-id": "640efd73c16012ac41e3da81",
      },
    })
      .then((response) => response.json())
      .then((data) => setjsonData(data["data"]))
      .catch((err) => {
        console.log(err.message);
      });
  }, [api]);
  return [jsonData,setApi];
};

import { useEffect, useState } from "react";

export const useApi = (link) => {
  if (link == "" || link == null) return [];
  const [jsonData, setjsonData] = useState([]);
  const [api, setApi] = useState(link);
  useEffect(() => {
    const controller = new AbortController();
    fetch(api, {
      signal: controller.signal,
      headers: {
        "app-id": "640efd73c16012ac41e3da81",
      },
    })
      .then((response) => response.json())
      .then((data) =>
        data["data"] ? setjsonData(data["data"]) : setjsonData(data)
      )
      .catch((err) => {
        console.log(err.message);
      });
    return () => {
      controller.abort();
    };
  }, [api]);
  return [jsonData, setApi];
};

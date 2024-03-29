import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

import Landing from "./components/Landing/Landing";

function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/data`
      );

      if (response.status === 404) {
        return;
      }
      if (response.status === 200) {
        console.log("response.data", response.data);
        setData(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Landing data={data} />
    </>
  );
}

export default App;

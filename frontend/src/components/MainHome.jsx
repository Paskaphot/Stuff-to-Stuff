import { useState, useEffect } from "react";
import axios from "axios";
import Selector from "./Selector";

function MainHome() {
  const [labels, setLabels] = useState([]);

  const options = labels?.map((label) => ({
    value: label.id,
    label: label.name,
  }));

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/stuff/labels`)
      .then((response) => {
        setLabels(response.data);
      });
  }, []);

  return (
    <main className="main main--verticalCenter">
      <Selector options={options} />
    </main>
  );
}

export default MainHome;

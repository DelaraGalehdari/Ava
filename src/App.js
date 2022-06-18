import React, { useEffect, useState } from "react";
import Home from "./Components/Home";
import { fetchContent } from "./Apis/contentApi";
import "./App.css";

function App() {
  const [contentData, setContentData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);
      const fetchData = await fetchContent();
      setIsLoading(false);
      setContentData(fetchData);
    };
    fetch();
  }, []);
  return (
    <div className="App">
      <Home contentData={contentData} isLoading={isLoading} />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import Search from "./components/search/search";
import NewsData from "./data";
import axios from 'axios';
import './App.css'

async function fetchData() {
  const baseURL = "https://newsapi.org/v2/top-headlines?country=ua&apiKey=";
  const APIkey = 'ed6cf96f82da4c07b0f9ce0eccf6de3b'
  try {
    const response = await axios.get(`${baseURL}${APIkey}`);
    return response.data.articles;
  } catch (error) {
    console.error(error);
  }
}

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData().then(data => setData(data));
  }, []);

  if (!data) return null;
  return (
    <div className="App">
      <Search data={data}/>
    </div>
  );
}

export default App;

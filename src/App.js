import React, { useState } from "react";
import Search from "./components/search/search";
import NewsData from "./data";
import axios from 'axios';
import './App.css'

function App() {
  const baseURL = "https://newsapi.org/v2/top-headlines?country=ua&apiKey=";
  const APIkey = 'ed6cf96f82da4c07b0f9ce0eccf6de3b'
  const [data, setData] = useState([]);

//******************* XMLHttpRequest example ********************* */

React.useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `${baseURL}${APIkey}`, true);

    xhr.onload = function (e) {
            if (this.readyState == 4 && this.status == 200) {
            let json_obj = JSON.parse(xhr.responseText);
            setData(json_obj.articles)
            } 
        else 
            {
            console.error(xhr.statusText);
            }
        
    }
    xhr.onerror = function(error)
        {
        console.error( error )
        }
    xhr.send();
    }, []);
console.log(data)

//******************* fetch example ********************* */

    // React.useEffect(() => {
    //     const params = {
    //         path:'/v2/top-headlines?',
    //         country: 'ua',
    //         apiKey: 'ed6cf96f82da4c07b0f9ce0eccf6de3b'
    //     };
    //     const options = {
    //         method: 'GET',
    //     };
    //     fetch( `https://newsapi.org${params.path}country=${params.country}&apiKey=${params.apiKey}`, options)
    //     .then( response => response.json() )
    //     .then( response => {
    //         setData(response.articles)
    //     });
    //   }, []);
  

//******************* axios example ********************* */

  // React.useEffect(() => {
  //   axios.get(`${baseURL}${APIkey}`).then((response) => {
  //       setData(response.data.articles);
  //   });
  // }, []);
if (!data) return null;
  return (
    <div className="App">
  <Search data={data}/>
    </div>
  );
}

export default App;

import { useState } from "react";
import request from "./request";
import Row from "./components/Row";
import Banner from './components/Banner';
import Nav from './components/Nav';
import "./style/index.css";

function App() {
  const[isLargeRow, setLargeRow] = useState(true)

  return (
    <div className="app">
      <Nav/>
      <Banner fetchURL={request.fetchNetflixOriginal}/>
      <Row title="NETFLIX ORIGINAL" 
           fetchURL ={request.fetchNetflixOriginal} 
           isLargeRow={isLargeRow}/>  
      <Row title="Trending Now" fetchURL ={request.fetchTrending}/>  
      <Row title="Top Rated" fetchURL ={request.fetchTopRated}/>  
      <Row title="Action Movies" fetchURL ={request.fetchActionMovies}/>  
      <Row title="Comedy Movies" fetchURL ={request.fetchComedyMovies}/>  
      <Row title="Horror Movies" fetchURL ={request.fetchHorrorMovies}/> 
      <Row title="Romance Movies" fetchURL ={request.fetchRomanceMovies}/>   
      <Row title="Scifi" fetchURL ={request.fetchSciFi}/>  
      <Row title="Mystery Movie" fetchURL ={request.fetchMystery}/>  
    </div>
  );
}

export default App;

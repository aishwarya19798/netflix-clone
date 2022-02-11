import instance from "../instance";
import { useEffect, useState } from "react";
import "../style/banner.css"

const Banner = ({fetchURL}) => {
    const imgURL = "https://image.tmdb.org/t/p/original";
    
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        const fetchData = async() => {
                const request = await instance.get(fetchURL);
                const result = request.data.results;
                // setMovies(result);
                setMovies(
                    result[
                        Math.floor(Math.random()*result.length-1)
                    ]
                    );
                return request;
        }
        fetchData();
    }, [fetchURL])

    // console.log(movies)
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n-1) + "..." : str;
    }
    
    
    return (
    // background image
    // title
    // div > 2 buttons
    // description

    <header className="banner" style={{
      backgroundSize:"cover",
      backgroundImage:`url(${imgURL}${movies?.backdrop_path})`,
      backgroundPosition:"center center"
    }}>
      
      <div className="banner-content">
        <h1 className="banner-title">
            {movies?.title || movies?.name || movies?.original_name}
        </h1>
        <div className="banner_btns">
            <button className="banner-button">Play</button>
            <button className="banner-button">My List</button>
        </div>
        <h1 className="banner-description">
            {truncate(movies?.overview, 150)}
        </h1>
      </div>
     <div className="banner_fadeBottom"></div>
  </header>
  );
};

export default Banner;

import { useEffect, useState } from "react";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
import instance from "../instance";
import "../style/row.css";


const Row = ({title, fetchURL, isLargeRow}) => {
  const imgURL = "https://image.tmdb.org/t/p/original";
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(()=>{
        const fetchData = async() => {
                const request = await instance.get(fetchURL);
                const result = request.data.results;
                // console.log(result)
                setMovies(result);
                return request;
        }
        fetchData();
    }, [fetchURL])

    const opts = {
      height:"390",
      width:"100%",
      playerVars:{
        autoplay:1,
      },
    }

    const handleClick = (movie) => {
      if(trailerUrl){
        setTrailerUrl('');
      } else {
        movieTrailer(movie?.name || movie?.title || movie?.original_title || "")
        .then(url => {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get('v'));
            // console.log(urlParams)
            // console.log(setTrailerUrl(urlParams.get('v')))
        })
        .catch(e => console.log(e))
      }
    }

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {movies && movies.map((movie) => (
            <img className={`row-poster ${isLargeRow && "isLargeRow"}`}
                 key={movie.id}
                 onClick={()=> handleClick(movie)} 
                 src={`${imgURL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                 alt={movie.title} />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
  </div>
  )
};

export default Row;

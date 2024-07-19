import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import "./RowPost.css";
import axios from "../../axios";
import { imageUrl,API_KEY } from "../constants/constants1";

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId ,setUrlId] = useState('')

  useEffect(() => {
    axios
      .get(props.url)
      .then((Response) =>  {
       
        console.log(Response.data);

        setMovies(Response.data.results);
      })
      .catch((error) => {
       console.log (error)
      });
  }, []);
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  const handleMovie = (id) => {
     console.log(id)
     axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((Response)=>{
       if(Response.data.results.length !==0){
        console.log(Response.data.results[0])
        setUrlId(Response.data.results[0])
       }else if(Response.data.results.length === 0){
        console.log('array empty')
       }
       
     }).catch((error)=>{
      console.log(error)
     })
  }

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => {
          return (
            <img
              onClick={()=>handleMovie(obj.id)}
              className={props.isSmall ? "smallPoster" : "poster"}
              src={`${imageUrl + obj.backdrop_path}`}
            />
          );
        })}
      </div>

      { urlId && <YouTube opts={opts} videoId={urlId.key}  />  }  

    </div>
  );
}

export default RowPost;

import React, { useEffect, useState } from 'react'
import { API_KEY , imageUrl} from '../constants/constants1'
import axios from '../../axios'
import "./Banner.css"

function Banner() {
  const [movie, setMovie] = useState();

 useEffect(()=> {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((respons)=>{
      console.log(respons.data)
      setMovie(respons.data.results[7])

    })
  }, [])
  
   
  return (
    <div 
    style={{backgroundImage: `URL(${movie ? imageUrl+movie.backdrop_path : ''})`}}
    className='banner' >
        <div className='content' >
            <h1 className='title' > {movie? movie.title : ''} </h1>
            <div className='banner_buttons' >
                <button className='button' >Play</button>
                <button className='button' >My list</button>
            </div>
            <h1 className='discription' >{movie? movie.overview : ''}</h1>
        </div>
        <div className="fade"></div>
    </div>
  )
}

export default Banner

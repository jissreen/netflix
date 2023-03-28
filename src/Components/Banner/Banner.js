import React, { useEffect, useState } from 'react'
import { API_KEY ,imageUrl} from '../../constants/constants'
import axios from './../axios'
import './Banner.css'

function Banner() {
  const [movie,setMovie]=useState()
  
  useEffect(()=>{
    axios.get(`discover/movie?api_key=${API_KEY}&with_genres=35`).then((response)=>{
    console.log(response.data.results[17]) 
    setMovie(response.data.results[17]) 
    })

  },[])
  return (
    <div style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:""})`}} className="banner">
      <div className="content">
        <h1 className="title">{movie?movie.title:""}</h1>
        <div className="banner-buttons">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <h1 className="description">{movie?movie.overview:""} </h1>

      </div>
      <div className="fade-bottom"></div>




      
    </div>
  )
}

export default Banner

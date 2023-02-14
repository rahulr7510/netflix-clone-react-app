import {useState, useEffect} from 'react'
import axios from '../../axios'
import {API_KEY, imageUrl} from '../../constants/Constants'
import './Banner.css'


function Banner() {

  const [movie, setMovie] = useState()

  let display = Math.floor((Math.random() * 19) + 1);

   useEffect(() => {

    axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then((res) => {

      setMovie(res.data.results[display])  
    }) 
   }, []) 

  return (
   <div style={{backgroundImage: `url(${movie ? imageUrl+movie.backdrop_path : ""})`}}
    className="banner">

    <div className="content">
      <h1 className="title">{movie ? movie.title : ""}</h1>
    <div className="banner-buttons">

     <buttons className="buttons"><i className="icon fa fa-play" aria-hidden="true"></i> play</buttons>
     <buttons className="buttons"><i className="icon fa fa-plus" aria-hidden="true"></i> my list</buttons>

    </div>
    <h2 className="description">{movie ? movie.overview : ""}</h2>
    </div>
     <div className="fade-bottom">
      
     </div>

   </div>
  )
}

export default Banner

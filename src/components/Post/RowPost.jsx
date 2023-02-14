import {useEffect, useState} from 'react'
import './RowPost.css'
import axios from '../../axios'
import {imageUrl, API_KEY} from '../../constants/Constants'
import Youtube from 'react-youtube'


function Post(props) {
  
     const [post, setPost] = useState([])

     const [urlId, setUrlId] = useState('') 

     useEffect(() => {
      axios.get(props.url).then((res) => {
        setPost(res.data.results)
      })  
    }, [])  

     const opts = {
      height: '400px',
      width: '100%',
      playerVars: {
        autoplay: 1,
      },
    };

    const handleClick = (id)=>{
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((res)=>{
      if(res.data.results.length!==0){
        setUrlId(res.data.results[0])
      }
    })
    }

  return (
    <div class="row">
      <h2 className='poster-title'>{props.title}</h2>
      <div className="posters">
      {post.map((obj)=>

         <img onClick={()=> handleClick(obj.id)} class='poster-img' src={`${imageUrl+obj.poster_path}`} alt="poster" />
       )}
         
      </div>
     {urlId && <Youtube opts={opts} videoId={urlId.key} /> }
    </div>
  )
}

export default Post

import React,{useState,useEffect} from 'react'
import instance from '../baseUrl'
import './Row.css'


function Row({isLargeRow,title,fetchUrl}) {
    // movies state to hold movie
    const [movies,setMovies] = useState([])
    

    const base_url = "https://image.tmdb.org/t/p/original/";

    async function fetchData(){
       const result = await instance.get(fetchUrl)
       setMovies(result.data.results);

    }
    useEffect(()=>{
      fetchData()
    },[])
    // console.log(movies);
  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='movies'>
            {
                movies.map(movie=>(
                    <img className={`movie ${isLargeRow && "largeMovie"}`}
                     src={`${base_url}${isLargeRow?movie.poster_path: movie.backdrop_path}`} alt={movie.name} >
                        {/* alt={movie.name} */}

                    </img>
                ))
            }
        </div>
    </div>
  )
}

export default Row
import React, { useEffect } from 'react'
import  "./Home.scss";
//import krishna from "../../krishna.jpg"
import axios from 'axios';
import { useState } from 'react';



const apikey ="ebf3ee31757c650c8fbf1d546cd610c7";
const url ="https://api.themoviedb.org/3";
const imgurl ="https://image.tmdb.org/t/p/w500";
const upcoming ="/discover/movie";
const genre="genre/movie/list";


const Card = ({img}) =>(

  
  
    <img className='card' src={img} alt ="cover" />
  )


const Row = ({ title, arr =[



], })=>(
  
    <div className='row'>
        <h2 >{title}</h2>

       <div>
      {
        arr.map((item,index)=>(
          
           <Card key= {index} img ={`${imgurl}/${item.poster_path}`} /> 
        ))
      }
        
       </div>
    </div>
  )

const Home = () => {

const [upcomingMovies, setUpcomingMovies]= useState([])

const [genreMovies,setgenreMovies] = useState([])



 useEffect(()=>{      //call everytime when Home component mount/load, when value of variable in argument changes.

   const fetchUpcoming =async()=> {
    const { data: {results}} = await axios.get(`${url}/${upcoming}?api_key=${apikey}`); //destructuring
    
    setUpcomingMovies(results)
    
    console.log(upcomingMovies)
    
   };

   const getAllGenre =async()=> {
    const { data: {results}} = await axios.get(`${url}/${genre}?api_key=${apikey}`); //destructuring
    
    setgenreMovies(results)
    
    console.log(genreMovies)
    
   };

   fetchUpcoming()

 }, [])


  return (
    <section className='home'>
      
        <div className="banner"></div>

        <Row title={"Upcoming Movies"} arr={upcomingMovies} />
        <Row title={"Popular on Netflix"} arr={upcomingMovies} />
        <Row title={"Movie"} arr={upcomingMovies} />
        <Row title={"TV Shows"} arr={upcomingMovies} />
        <Row title={"Recently Viewed"}  arr={upcomingMovies}/>
        <Row title={"My List"} arr={upcomingMovies}/>
    </section>
  )
}

export default Home
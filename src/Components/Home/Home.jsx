import React, { useEffect } from "react";
import "./Home.scss";
//import krishna from "../../krishna.jpg"
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import {BiPlay} from "react-icons/bi"
import {AiOutlinePlus} from "react-icons/ai"

const apikey = "ebf3ee31757c650c8fbf1d546cd610c7";
const url = "https://api.themoviedb.org/3";
const imgurl = "https://image.tmdb.org/t/p/w500";
const upcoming = "/discover/movie";
const genre = "genre/movie/list";

const Card = ({ img }) => <img className="card" src={img} alt="cover" />;

const Row = ({ title, arr = [] }) => (
  <div className="row">
    <h2>{title}</h2>

    <div>
      {arr.map((item, index) => (
        <Card key={index} img={`${imgurl}/${item.poster_path}`} />
      ))}
    </div>
  </div>
);

const Home = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  const [genreMovies, setgenreMovies] = useState([]);

  useEffect(() => {
    //call everytime when Home component mount/load, when value of variable in argument changes.

    const fetchUpcoming = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/${upcoming}?api_key=${apikey}`); //destructuring

      setUpcomingMovies(results);

      console.log(upcomingMovies);
      console.log(results);
    };

    const getAllGenre = async () => {
      const {
        data: { genres },
      } = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=ebf3ee31757c650c8fbf1d546cd610c7`
      ); //destructuring

      setgenreMovies(genres);

      console.log(genres);
    };

    fetchUpcoming();
    getAllGenre();
  }, []);

  return (
    <section className="home">
      <div
        className="banner"
        style={{
          backgroundImage: upcomingMovies[10]
            ? `url(${`${imgurl}/${upcomingMovies[10].poster_path}`})`
            : "none",
        }}
      >
        {upcomingMovies[10] && <h1>{upcomingMovies[10].original_title}</h1>}
        {upcomingMovies[10] && <p>{upcomingMovies[10].overview}</p>}

        <div>

        <button>Play<BiPlay /></button>
        <button>My List<AiOutlinePlus /></button>
        </div>
      </div>

      <Row title={"Upcoming Movies"} arr={upcomingMovies} />
      <Row title={"Popular on Netflix"} arr={upcomingMovies} />
      <Row title={"Movie"} arr={upcomingMovies} />
      <Row title={"TV Shows"} arr={upcomingMovies} />
      <Row title={"Recently Viewed"} arr={upcomingMovies} />
      <Row title={"My List"} arr={upcomingMovies} />

      <div className="genreBox">
        {genreMovies.map((item) => (
          <Link key={item.id} to={`/genre/${item.id}`}>
            {item.name}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Home;

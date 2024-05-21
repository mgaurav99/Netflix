import React from 'react'
import  "./Home.scss";
import krishna from "../../krishna.jpg"


const Card = ({img}) =>(
  
    <img src={img} alt ="cover" />
  )


const Row = ({ title })=>(
  
    <div >
        <h2 >{title}</h2>

        <Card img ={krishna} />
    </div>
  )

const Home = () => {
  return (
    <section className='home'>
      
        <div className="banner"></div>

        <Row title={"Popular on Netflix"} />
    </section>
  )
}

export default Home
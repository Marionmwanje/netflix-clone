import React from 'react'
import Poster from "../../Assets/kate.jpg"
import download from "../../Assets/download.jpg";
import blood from "../../Assets/blood.jpg";
import firstKill from "../../Assets/firstKill.jpg";
import alwarabi from "../../Assets/alwarabi.jpg";
import strong from "../../Assets/strong.jpg";
import elite from "../../Assets/elite.jpg";


function Row({title}) {
  return (
    <div className='row' >
        <h2> {title} </h2>
        <div className="row__posters">
            <img className='row__poster 
            row__posterLarge' src={Poster} alt="" />
            <img className='row__poster 
            row__posterLarge' src={download} alt="" />
            <img className='row__poster 
            row__posterLarge' src={blood} alt="" />
            <img className='row__poster 
            row__posterLarge' src={firstKill} alt="" />
            <img className='row__poster 
            row__posterLarge' src={alwarabi} alt="" />
            <img className='row__poster 
            row__posterLarge' src={strong} alt="" />
            <img className='row__poster 
            row__posterLarge' src={elite} alt="" />
        </div>
    </div>
  )
}

export default Row
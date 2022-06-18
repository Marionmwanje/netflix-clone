import React from 'react'
import "../../App.css"

function Banner() {
  return (
    <div className='banner'>
       <div className='banner__contents' >
        <div className='banner__title'>
            <h1>First kill</h1>
        </div>
        <div className="banner__buttons">
            <button className="banner__button" >play</button>
            <button className="banner__button" >my list</button>
            </div>
            <div className="banner__description">
                <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio amet consequatur, earum quasi ipsam suscipit harum ipsum! Nobis, aperiam? Eaque mollitia asperiores accusantium expedita et similique voluptas dignissimos. </p>
            </div>
            
            
        </div>
        <div className="banner--fadeBottom"></div>
       </div>
  )
}

export default Banner
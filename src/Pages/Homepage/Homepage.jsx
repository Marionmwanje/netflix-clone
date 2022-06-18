import React from 'react'
import Banner from '../../Components/Banner/Banner'
import "../../App.css"
import Row from '../../Components/Row/Row'

function Homepage() {
  return (
    <div>
        Homepage
        <Banner/>
        <Row title='Netflix Originals'/>
        <Row title='Trending Now'/>
        <Row title='Top Rated'/>
        <Row title='Action Movies'/>
        <Row title='Horror Movies'/>
        <Row title='Romance Movies'/>        
        <Row title='Documentaries'/>        

    </div>
  )
}

export default Homepage
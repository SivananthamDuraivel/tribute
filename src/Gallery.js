import React from 'react'
import g1 from './images/g1.jpg'
import g2 from './images/g2.jpg'
import g3 from './images/g3.jpg'
import g4 from './images/g4.jpg'
import g5 from './images/g5.jpg'
import g6 from './images/g6.jpg'
import g7 from './images/g7.jpg'
import g8 from './images/g8.jpg'
import g9 from './images/g9.jpg'

//gallery

const Gallery = () => {
  return (
    <center>
    <br /><br />    
    <h3 style={{fontWeight:'600'}} className='work-sans' id="agri">A Farmer's Journey</h3>
    <div className='gallery'>
        <div className="gallery-container">
            <img src={g6} alt="" />    
            <img src={g2} alt="" />
            <img src={g8} alt="" />
            <img src={g3} alt="" />
            <img src={g4} alt="" />
            <img src={g5} alt="" />
            <img src={g7} alt="" />
            <img src={g9} alt="" />
            <img src={g1} alt="" />
        </div>
    </div>  
    </center>
  )
}

export default Gallery

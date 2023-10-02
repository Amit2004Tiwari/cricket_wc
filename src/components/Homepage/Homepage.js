import React from 'react'
import navbar from '../navbar/navbar'
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import img from '../data/mainlogo.jpg'
import img1 from '../data/CWC19.jpg'
import img2 from '../data/CWC15.jpg'
import img3 from '../data/CWC11.avif'
import './Homepage.css'


function ImageWithInfo(props) {
  return (
    <div className="image-container">
      <img src={props.imageSrc} alt={props.imageAlt} />
      <div className="info">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
const Homepage = () => {
  return (
    < > 
    <div><Navbar/></div>
    <div className="App">
      <ImageWithInfo
        imageSrc={img1}
        imageAlt="Image 1"
        title="Winner of CWC2019"
        description="England won on boundary count"
      />
      <ImageWithInfo
        imageSrc={img2}
        imageAlt="Image 2"
        title="Winner of CWC2015"
        description="Austrailia won by 7 wickets"
      />
      <ImageWithInfo
        imageSrc={img3}
        imageAlt="Image 3"
        title="Winner of CWC2011"
        description="India won by 6 wickets"
      />
      </div>
<Footer/>
    </>

  )
}

export default Homepage
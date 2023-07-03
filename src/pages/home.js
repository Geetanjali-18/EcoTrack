import React from 'react'
import image6 from '../images/forest.png'
import image1 from '../images/userdrivendata.png'
import image2 from '../images/interactivemaps.png'
import image3 from '../images/realtimeupdate.jpg'
import image4 from '../images/predictionalgorithm.png'
import image5 from '../images/reachout-removebg-preview.png'
import {Card} from '../components/card.js'
import Chatbot from '../components/chatbot'
export const Home = () => {
  const imageurl='./images/forest.png';
  var about1 ='Join the vibrant EcoTrack community that actively contributes to our comprehensive database.Your participation shapes the accuracy and impact of our predictions.';
  var about2="Stay one step ahead with EcoTrack's real-time updates on pollution and weather conditions.Our platform keeps you in sync with your environment, empowering proactive decision-making.";
  var about3= "Explore pollution and weather conditions with EcoTrack's immersive, user-friendly maps.Customize your experience by zooming, filtering, and toggling layers, unraveling localized insights that matter to you."
  var about4="EcoTrack employs cutting-edge algorithms to analyze vast datasets, delivering precise forecasts.Our sophisticated technology harnesses the power of data to provide actionable insights"
  var about5="Connect with the EcoTrack team to share your feedback, suggestions, or concerns.Your voice matters to us, and we are dedicated to providing exceptional user support."
  return (
    <>
    <div className='hero-section'>
        {/* <svg id='clouds' width="242" height="90" viewBox="0 0 242 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M124.103 52.1379H15.5128C10.5487 52.1379 0 58.3448 0 69.5173C0 83.4207 9.30769 90 15.5128 90H191.738C197.323 90 206.631 84.4138 206.631 69.5173C206.631 58.3448 197.944 52.1379 191.738 52.1379H173.123C166.173 46.1793 170.227 40.5517 173.123 38.4828H225.246C232.072 38.4828 242 32.8966 242 20.4828C242 4.34485 229.59 0 225.246 0H65.1538C57.0872 0 49.7651 9.55862 50.2615 20.4828C50.7579 31.4069 58.3282 38.4828 65.1538 38.4828H124.103C128.57 43.4483 125.964 49.6552 124.103 52.1379Z" fill="#F4FDFF"/>
</svg> */}
        <h1 className='hero-section-heading'>WANT TO UNCOVER THE ENVIRONMENTAL REALITIES OF OUR WORLD?</h1>
        <a href='#about' className='btn'>MORE INFO</a>

    </div>
    <Chatbot/>
    <div className='about-section' id='about'>
        <Card url={image1} text={about1} heading='User-Driven Data Collection'/>
        <Card url={image2} text={about3} heading='Interactive Maps'/>
        <Card url={image3} text={about2} heading='Real-Time Updates'/>
        <Card url={image4} text={about4} heading='Advanced Prediction Algorithms'/>
        <Card url={image5} text={about5} heading='Reach Out to Us'/>
    </div>
    </>
  )
}

import React from 'react'
import bgVideo from '../assets/home_video.mp4'
import './Home.css'


function Home() {
  return (
    <div id="homePage">
      <video className="bgVideo" autoPlay loop muted>
        <source src={bgVideo} type='video/mp4' />
      </video>
      <div className="home_content">
        <div class="ori-responsive">
          <div class="glitch">
            <span id="first_char">L</span>unA_yAnG
          </div>
        </div>
        
        <div class="subtitle">Developer . Gamer . HongKonger</div>
      </div>
    </div>
  )
}

export default Home

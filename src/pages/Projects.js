import React from 'react'
import './Projects.css'
import Lt_logo from '../assets/LeetTrader.png'
import Bj_logo from '../assets/poker.png'
import Jf_logo from '../assets/fuji.png'
import ProjCard from '../components/ProjCard'


function Projects() {
  const proj_text_1 = "LeetTrader is a stock trading simulator that could help novice investor to practice investment."
  const proj_text_2 = "FSM-Blackjack is a classic casino game. Player needs to get a hand worth more than the dealer without going over 21."
  const proj_text_3 = "JP Fever is an iOS application that provides Japanese vocabulary book and dictation quizzes."

  return (
    <div id="projectPage" className="projPageClass">
      <ProjCard 
        logo={Lt_logo} 
        title="LeetTrader" 
        text={proj_text_1} 
        btnVariant="info"
        tagList={["MongoDB", "Express", "React", "Node", "MySQl", "Bootstrap", "REST"]}
        link="https://leettrader-lpzks.ondigitalocean.app/"
        demo={false}
      />

      <ProjCard 
        logo={Bj_logo}
        title="FSM-Blackjack"
        text={proj_text_2}
        btnVariant="warning"
        tagList={[".NET core", "React", "Node", "Bootstrap"]}
        link="https://netblackjack-lvln4.ondigitalocean.app/"
        demo={false}
      />

      <ProjCard 
        logo={Jf_logo} 
        title="JP Fever" 
        text={proj_text_3} 
        tagList={["Xcode", "Swift"]}
        btnVariant="dark"
        demo={true}
      />
    </div>
  )
}

export default Projects

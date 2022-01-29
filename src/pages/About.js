import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import AbtPage from '../components/AbtPage'
import pic1 from '../assets/abt_1.jpeg'
import pic2 from '../assets/abt_2.jpg'
import pic3 from '../assets/abt_3.jpg'
import './About.css'


function About() {
  let s1 = "I am a HongKonger, my Chinese name means moon, my favourite drink is coffee, "
  s1 += "I love Gundam and Batman, I have a collection of super hero figures, "
  s1 += "I learn guitar during spare time, and I survived a car accident when I was 9."

  let s2 = "I’m Luna Yang, and I’m a software engineer and web developer. I am a computer science graduate from UNSW. "
  s2 += "I am experienced in .NET, NodeJs and other web development technologies such as ReactJs, SQL. "
  s2 += "In addition to my day-to-day work as a software engineer, I love to work on my side projects " 
  s2 += "to keep myself updated with the latest technologies and trends."

  let s3 = "I love to explore new things and I am continuously learning new technologies "
  s3 += "and sharpening my programming skills. Music is my balance, I wish that "
  s3 += "one day I will become a proficient guitar player. "


  return (
    <div id="aboutPage">
      <Carousel>
        <Carousel.Item>
          <AbtPage title="Fun Facts About Me" content={s1} img={pic1}/>
        </Carousel.Item>

        <Carousel.Item>
          <AbtPage title="Techical Skills" content={s2} img={pic2}/>
        </Carousel.Item>

        <Carousel.Item>
          <AbtPage title="My Passions" content={s3} img={pic3}/>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default About

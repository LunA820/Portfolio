import React from 'react'
import './JpFever.css'
import Demo1 from '../assets/Demo1.mp4'
import Demo2 from '../assets/Demo2.mp4'
import Demo3 from '../assets/Demo3.mp4'


function JpFever(){
  return (
    <div id="JPFever">
      <div id="Overview">
        <h1>Japanese Fever</h1>
        <p>
          When I started to learn Japanese, <br />
          I realized that the available learning apps 
          did not have the feature of adding new vocab. <br/>
          This motivated me to build my first iOS application - <i>Japanese Fever</i>.
        </p>
      </div>

      <div class="Demo" id="Demo1">
        <div class="DemoVideo">
          <video class="proj_video" autoPlay loop muted>
            <source src={Demo1} type='video/mp4' />
          </video>
        </div>
        <div class="DemoTxt">
          <div class="DemoTxt_title"><b>Dictionary Feature</b></div><br />
          The Dictionary feature provides the most commonly used vocabulary, categorised in 12 chapters:
          <ol>
            <li>Places</li>
            <li>Home</li>  
            <li>Position</li>
            <li>Food</li>
            <li>Daily necessities</li>
            <li>Transportation</li>
            <li>Job</li>
            <li>Interpersonal relationship</li>
            <li>Body</li>
            <li>Animal and Plants</li>
            <li>Natural</li>
            <li>Event</li>
          </ol>
          So that users can learn the topics that they are interested in first. 
        </div>
      </div>

      <div class="Demo" id="Demo2">
        <div class="DemoTxt_2">
          <div class="DemoTxt_title"><b>Dictation Feature</b></div><br />
            The dictation feature can helps user to memorize the vocabulary better.
            For each chapter there will be one dictation quiz. <br /><br />
            After finishing the quiz, the percentage score of the quiz will be shown,
            and the most recent score of the quiz will be recorded in the Progress page, 
            so that users can understand how well do they learn. 
            <br/><br/>
            Besides, the correction list summarizes the vocabulary that the users fail to answer, 
            so that users focus more on the words that they don't remember. 
        </div>
        <div class="DemoVideo">
          <video class="proj_video" autoPlay loop muted>
            <source src={Demo2} type='video/mp4' />
          </video>
        </div>
      </div>

      <div class="Demo" id="Demo3">
        <div class="DemoVideo">
          <video class="proj_video" autoPlay loop muted>
            <source src={Demo3} type='video/mp4' />
          </video>
        </div>
        <div class="DemoTxt">
          <div class="DemoTxt_title"><b>Custom Vocab Book</b></div><br />
          Users can add new words to the Custom Vocab Book. 
          They can also edit or delete words from it. 
          The custom Vocab Book also has full support from Dictation feature,  
          so that users can keep learning new words.
          <br /><br />
          With the Custom Vocab Book feature, the vocab bank will never run out of 
          new words for learning anymore. 
        </div>
      </div>
    </div>
  )
}

export default JpFever;
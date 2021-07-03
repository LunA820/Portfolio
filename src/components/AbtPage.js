import React from 'react'
import './AbtPage.css'


function AbtPage(props) {
  return (
    <div className="about_items">
      <h2>{props.title}</h2>
      <img className="abt_Img" src={props.img} />
      <div className="about_text">{props.content}</div>
    </div>
  )
}

export default AbtPage

import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import './ProjCard.css'


export default function ProjCard(props) {
  return (
    <Card>
        <Card.Body>
          <img class="proj_icon" src={props.logo} />
          <div className="tagGroup">
            {
              props.tagList.map((t)=>{
                return <Badge variant="success" className="projTag">{t}</Badge>
              })
            }
          </div>
          
          <hr />
          <Card.Title>{props.title}</Card.Title>          
          <Card.Text>{props.text}<br/><br/></Card.Text>
          <Button 
            variant={props.btnVariant} 
            href={props.link}
            target="_blank"
          >
            {props.btnTitle}
          </Button>
        </Card.Body>
      </Card>
  )
}

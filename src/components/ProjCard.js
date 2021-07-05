import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import './ProjCard.css'


export default function ProjCard(props) {
  return (
    <Card>
        <Card.Body>
          <img class="proj_icon" src={props.logo} alt={"Logo"}/>
          <div className="tagGroup">
            {
              props.tagList.map((t)=>{
                return <Badge variant="success" className="projTag">{t}</Badge>
              })
            }
          </div>
          
          <hr />
          <Card.Title>
            {props.title} &nbsp;
            <a href="https://github.com/LunA820" target="_blank" alt={"git link"}>
              <Badge variant="dark">Git</Badge>
            </a>
          </Card.Title>
                  
          <Card.Text>{props.text}</Card.Text>
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

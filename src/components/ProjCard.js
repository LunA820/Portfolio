import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import {BrowserRouter as Router, Link} from 'react-router-dom';
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
            <a href="https://github.com/LunA820" target="_blank" rel="noreferrer">
              <Badge variant="dark">Git</Badge>
            </a>
          </Card.Title>
                  
          <Card.Text>{props.text}</Card.Text>
          
          {
            props.demo ? <Router>
              <Link to="/JpFever" target="_blank">
                <Button variant="dark">See Demo</Button>
              </Link>
            </Router>:<Button 
            variant={props.btnVariant} 
            href={props.link}
            target="_blank"
            >
              Explore {props.title}
            </Button>
          }
        </Card.Body>
      </Card>
  )
}

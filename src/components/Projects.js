import React, {Component} from 'react';
import { Row, Col, Card, Button, Badge } from 'react-bootstrap';
import sort from '../assets/Vis.gif'
import coming from '../assets/comingsoon.png'
import battleship from '../assets/battleship.png'
import { FaGithub } from 'react-icons/fa'

class Projects extends Component{
    render(){
        return(
            <div className="projects">
                <Row></Row>
                <Row style ={{marginTop:"5vh"}}></Row>
                <Row style={{ display:"flex",justiftyContent:"center"}} >
                    <Col sm={1}></Col>
                    <Col >
                        <Card style={{ width: '30rem', boxShadow:"0px 0px 15px" }}>
                            <Card.Img variant="top" src={sort} />   
                            <Card.Body>
                                <Card.Title>
                                    <p  style={{ fontSize:"25px", fontFamily: "'Fredoka One', cursive"}}>Sorting Visualizer</p>
                                    <Badge variant="secondary">React | Javascript | CSS</Badge>
                                </Card.Title>
                                <Card.Text>
                                    I created a program to visualize sorting algorithms using react. While it is still a work in progress, the foundation for generating a random array and visualizing it is already in place.
                                </Card.Text>
                                <Button variant="secondary" onClick={()=> window.open("https://github.com/Kensuga/sortingVisualizer","_blank")}><FaGithub style={{fontSize:"24px"}}/> Repository</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '30rem', boxShadow:"0px 0px 15px"  }}>
                            <Card.Img variant="top" src={battleship} />
                            <Card.Body>
                                <Card.Title >
                                        <p style={{ fontSize:"25px", fontFamily: "'Fredoka One', cursive"}}>BattleShip</p>
                                        <Badge variant="secondary">React | Javascript | CSS</Badge>
                                    </Card.Title>
                                <Card.Text>
                                    This is the game battleship, where a player has to find and destroy a number of ships that randomly change positions on page load<br/><br/>
                                </Card.Text>
                                <Button variant="secondary" onClick={()=> window.open("https://github.com/Kensuga/Battleship-prototype","_blank")}><FaGithub style={{fontSize:"24px"}}/> Repository</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '30rem', boxShadow:"0px 0px 15px"  }}>
                            <Card.Img variant="top" src={coming} />
                            <Card.Body>
                                <Card.Title >
                                    <p style={{ fontSize:"25px", fontFamily: "'Fredoka One', cursive"}}>This Portfolio!</p>
                                    <Badge variant="secondary">React | Javascript | CSS</Badge>
                                </Card.Title>
                                <Card.Text>
                                    I created this Portfolio from the found up using react, bootstrap and a few other libraries as well. Those libraries being React-Icons as well as React-Spring, free resources for icons and animations.<br/>
                                </Card.Text>
                                <Row>
                                <Button variant="secondary" onClick={()=> window.open("https://github.com/Kensuga/portfolio_react","_blank")}><FaGithub style={{fontSize:"24px"}}/> Repository</Button>
                                </Row>
                            </Card.Body>
                        </Card>   
                    </Col>
                    <Col sm={1}></Col>
                </Row>
            </div>
        )
    }
}

export default Projects
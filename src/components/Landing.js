import React, {Component} from 'react';
import { Row, Col } from 'react-bootstrap'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

class Landing extends Component{
    render(){
        return(
            <div className = "welcome">
                <Row>
                    <Col style={{display:"flex", justifyContent:"center"}}>
                        <h1 className="jumbo" style={{marginTop:"20vh"}}>Cruz Castillo</h1>
                    </Col>
                </Row>
                <Row>
                    <Col style={{display:"flex", justifyContent:"center"}}><p style={{fontSize:"50px", marginTop:"50px", fontFamily: "'Fredoka One', cursive"}}>Full-Stack Web Developer</p></Col>
                </Row>
                <Row>
                    <Col style={{display:"flex", justifyContent:"center", fontSize: "100px"}}>
                    <FaGithub style={{cursor:"pointer"}} onClick = {()=> window.open("https://github.com/Kensuga","_blank")}/> <FaLinkedin style={{cursor:"pointer"}} onClick = {()=> window.open("https://www.linkedin.com/in/cruz-castillo-4a23391a4/","_blank")}/>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Landing
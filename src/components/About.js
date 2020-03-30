import React, {Component} from 'react';
import { Row, Col, Image, Button } from 'react-bootstrap'
import MyPicture from '../assets/Alpha_20_027.jpg'

class About extends Component{
    render(){
        return(
            <div className = "about">
                <Row>
                <Col sm={6}>
                <Row style={{display:"flex",justifyContent:"center", width:"50vw"}}>
                    <h2 style={{fontSize:"100px", fontFamily: "'Fredoka One', cursive", width: "30vw", marginTop:"20vh"}}>About Me:</h2>
                </Row>
                <Row>
                    <br/>
                    <p style={{marginLeft: "100px", marginRight: "100px", marginTop: "50px", width: "40vw", fontSize:"20px"}}>I am a Full-Stack Web Developer. I am a new Full Stack developer based in San Diego from Learn Academy, an intense four month coding bootcamp in Downtown SD. I am passionate about being a developer as it gives me the opportunity to explore my passion for puzzles and problem solving. I am constantly looking for new opportunities to grow as a coder, be it expanding my network, or learning something new from every person I meet. During my free time I love hiking, catching up on the newest tv series, or playing a game with friends.
                    </p>
                    <Button style={{marginLeft: "100px", marginRight: "100px", marginTop: "50px", width: "40vw", fontSize:"20px"}} variant="secondary" onClick={()=> window.open("https://drive.google.com/file/d/1qov5nmIRHuQ4CEfziwuUhqi_QFa23-Lx/view?usp=sharing","_blank")}>My Resume</Button>
                </Row>
                </Col>
                <Col sm={6}>
                    <Row>
                    <Col xs={6} md={4}>
                        <Image src={MyPicture} style={{height:"50vh",width:"30vw", marginTop:"15vh",marginLeft:"5vw", boxShadow:"0px 0px 15px"}} roundedCircle />
                    </Col>
                    </Row>
                </Col>
                </Row>
            </div>
        )
    }
}

export default About
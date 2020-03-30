import React, {Component} from 'react';
import { Row, Col } from 'react-bootstrap'
import { FaHtml5, FaReact } from 'react-icons/fa'
import { DiRuby, DiRor, DiPostgresql, DiGit, DiCloud9, DiJavascript, DiCss3 } from 'react-icons/di'

class Skills extends Component{
    render(){
        return(
            <div className="skills">
            <Row>
                <Col>
                <h2 className = "bigcenter" style={{fontSize:"125px", marginTop:"8vh"}}>Languages</h2>
                </Col>
            </Row>
            <Row style={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
                <Col sm={1} style={{display:"flex", flexDirection:"column", justiftyContent:"center",alignItems:"center"}}><FaHtml5 style={{fontSize: "150px", color:"#e34f26"}}/><p style={{fontFamily: "'Fredoka One', cursive"}}>HTML5</p></Col>
                <Col sm={1} style={{display:"flex", flexDirection:"column", justiftyContent:"center",alignItems:"center"}}><DiCss3 style={{fontSize: "150px", color:"#389cff"}}/><p style={{fontFamily: "'Fredoka One', cursive"}}>CSS3</p></Col>
                <Col sm={1} style={{display:"flex", flexDirection:"column", justiftyContent:"center",alignItems:"center"}}><DiJavascript style={{fontSize: "150px", color:"#ccbd4e"}}/><p style={{fontFamily: "'Fredoka One', cursive"}}>Javascript</p></Col>
                <Col sm={1} style={{display:"flex", flexDirection:"column", justiftyContent:"center",alignItems:"center"}}><DiRuby style={{fontSize: "150px", color:"#962f2f"}}/><p style={{fontFamily: "'Fredoka One', cursive"}}>Ruby</p></Col>
                <Col sm={1} style={{display:"flex", flexDirection:"column", justiftyContent:"center",alignItems:"center"}}><DiPostgresql style={{fontSize: "150px", color:"#2f6396"}}/><p style={{fontFamily: "'Fredoka One', cursive"}}>Postgresql</p></Col>
            </Row>
            <Row style={{marginTop:"5vh"}}>
                <Col>
                    <Row style={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
                        <h2 className = "bigcenter" style={{fontSize:"75px"}}>Frameworks</h2>
                    </Row>
                    <Row style={{display:"flex", justifyContent:"space-around"}}>
                        <Col sm={1} style={{display:"flex", flexDirection:"column", justiftyContent:"center",alignItems:"center"}}><FaReact style={{fontSize: "150px", color:"#37a69b"}}/><p style={{fontFamily: "'Fredoka One', cursive"}}>React</p></Col>
                        <Col sm={1} style={{display:"flex", flexDirection:"column", justiftyContent:"center",alignItems:"center"}}><DiRor style={{fontSize: "150px", color: "#a63737"}}/><p style={{fontFamily: "'Fredoka One', cursive"}}>Rails</p></Col>
                    </Row>
                </Col>
                <Col>
                    <Row style={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
                        <h2 className = "bigcenter" style={{fontSize:"75px"}}>Other Skills</h2>
                    </Row>
                    <Row style={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
                        <Col sm={1} style={{display:"flex", flexDirection:"column", justiftyContent:"center",alignItems:"center"}}><DiGit style={{fontSize: "150px", color:"#d49844"}}/><p style={{fontFamily: "'Fredoka One', cursive"}}>Git</p></Col>
                        <Col sm={1} style={{display:"flex", flexDirection:"column", justiftyContent:"center",alignItems:"center"}}><DiCloud9 style={{fontSize: "150px", color:"#44b7d4"}}/><p style={{fontFamily: "'Fredoka One', cursive"}}>Cloud9</p></Col>
                    </Row>
                </Col>
            </Row>
            </div>
        )
    }
}

export default Skills
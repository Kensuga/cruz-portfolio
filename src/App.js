import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Row, Col } from 'react-bootstrap'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Landing from './components/Landing'
import Skills from './components/Skills'
import About from './components/About'
import Projects from './components/Projects'
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'


class App extends Component {
  render(){
    return (
      <div>
        <p className = "headerbox">
        <h1 className = "fixed">
          <Row >
            <Col className = "h1style" style={{marginLeft:"1vw"}}sm={2}>Cruz Castillo</Col>
            <Col style={{display:"flex", justifyContent:"center"}}>
              <Col sm={6}>
              <Row style={{display:"flex", justifyContent:"space-around"}}>
                <p onClick={() => this.parallax.scrollTo(0)}>Home</p><p>|</p>
                <p onClick={() => this.parallax.scrollTo(1)}>About Me</p><p>|</p>
                <p onClick={() => this.parallax.scrollTo(2)}>Skills</p><p>|</p>
                <p onClick={() => this.parallax.scrollTo(3)}>Projects</p>
              </Row>
              </Col>
            </Col>
            <Col sm={1}></Col>
            <Col sm={1}><FaGithub style={{cursor:"pointer"}} onClick = {()=> window.open("https://github.com/Kensuga","_blank")}/> <FaLinkedin style={{cursor:"pointer"}} onClick = {()=> window.open("https://www.linkedin.com/in/cruz-castillo-4a23391a4/","_blank")}/></Col>
          </Row>
        </h1>
        </p>
        <Row>.</Row>
        <Parallax pages={4} scrolling={true} vertical ref={ref => (this.parallax = ref)}style={{background:"rgb(115, 180, 255)",height:"93.8vh"}}>
          <ParallaxLayer offset={0} speed={0.5}>
            <Landing />
          </ParallaxLayer >
          <ParallaxLayer offset={1} speed={0.5}>
            <About />
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={0.5}>
            <Skills />
          </ParallaxLayer>          
          <ParallaxLayer offset={3} speed={0.5}>
            <Projects />
          </ParallaxLayer>
        </Parallax>
      </div>
    );
  }
}

export default App;
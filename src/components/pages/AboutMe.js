import React from "react";
import Footer from '../Footer';
import styled from 'styled-components';

const Header = styled.div`
    background-color: #FFFF81;
    width: 100%;
    height: 150px;
    margin-top: 30px;
  
`

const TitleCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-top: 25px;
    flex-direction: column;
`
const AboutSection = styled.div`
    margin-top: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
const Front = styled.div`
    display: flex;
    float: left;
    width: 45%;
    height: 140px;
    border: solid 5px #3300FF;
    margin-left: 50px;
    margin-top: 60px;
    background-color: #FFFF81;
    color: #3300FF;
    text-align: center;
    
    &:hover {
      
      }
`

const Back = styled.div`
    display: flex;
    float: right;
    width: 45%;
    height: 140px;
    border: solid 5px #3300FF;
    margin-right: 50px;
    margin-top: 250px;
    background-color: #FFFF81;
    color: #3300FF;
    text-align: center;
    
    &:hover {
        
      }
`

function About() {
    return (
        <>
           <Header>
            <TitleCard>
               <h1>Hi, I am <span style={{borderBottom: "solid 5px #3300FF"}}>Julian Esquivel</span></h1>
               <h4> A Web Developer</h4>
            </TitleCard>
            <AboutSection>
                <h1 style={{color: "white", border: "solid 2px #FFFF81", padding: "15px"}}>About <span style={{color: "white", borderBottom: "solid 5px #3300FF"}}>Me</span></h1>
            </AboutSection>
            <Front>
                <h1 style={{paddingTop: "15px", borderRight: "solid 1px #3300FF", }}>Front-end</h1>
                <p style={{color: "black", paddingTop: "35px", paddingLeft: "10px" }}>I have developed my skills in the design aspect of a website using technologies like HTML, CSS, JavaScript, React.</p>
            </Front>
            <Back>
            <h1 style={{paddingTop: "30px", borderRight: "solid 1px #3300FF", padding: "5px" }}>Back-end</h1>
                <p style={{color: "black", paddingTop: "35px", paddingLeft: "10px" }}>Proficient in developing and maintaining servers, apis, and databases.</p>
            </Back>
           </Header>
           <Footer />
        </>
    )
}

export default About;
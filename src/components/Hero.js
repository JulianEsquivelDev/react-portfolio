import React,{useState} from 'react';
import './Hero.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled.button`
  background-color: transparent;
  border-radius: 25px;
  padding: 10px;
  color: turquoise;
  border: 3px solid turquoise;
  &:hover {
    background-color: turquoise;
    color: white;
    transform: scale(1.2);
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  }

`
;

function  Hero(){
    return (
      <>
    <div class="row">
  <div class="column">
    <h2 class="me-box">About Me</h2>
    <img src=""></img>
  </div>
  
  <div class="column">
    <h2></h2>
    <p className="mainText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.</p>
  </div>
</div>
<h1 className="linksTitle"> Links </h1>
       <section className="linksBox">
       
      <Button>
        GitHub
      </Button>
   
  
      <Button>
      
        Linkedin
      </Button>
  
     
      </section> 
       

</>
      
    );
}


export default Hero;
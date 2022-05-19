import React from "react";
import Hero from '../Hero';
import Footer from '../Footer';
import styled from 'styled-components';

const Card = styled.div`
  background-color: transparent;
  border-radius: 25px;
  border: solid 8px white;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  flex-direction: column;
  margin: auto;
  width: 50%;
  margin-top: 300px;
  
`
const Form = styled.form`
display: flex;
margin: 20px;
padding: 10px;
flex-direction: column;

`

function Contact() {
    const inputStyle = {
        padding: "10px",
        margin: "10px",
        borderRadius: "25px",
        border: "solid 5px turquoise",
        backgroundColor: "transparent",
        color: "white"
    }
    return (
        <>
    <Card>
        <Form >
        <input name="name" type="text"  placeholder="Name" style={inputStyle}/>   
        <input name="email" type="text"  placeholder="Email" style={inputStyle}/>
        <textarea name="text" class="feedback-input" placeholder="Comment" style={inputStyle}></textarea>
        <input type="submit" value="SUBMIT" style={inputStyle}/>
        </Form>
       
    </Card>
          
           <Footer />
        </>
    )
}

export default Contact;
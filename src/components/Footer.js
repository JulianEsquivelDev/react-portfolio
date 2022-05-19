import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <div class="card text-center">
        <div class="card-header">
          Web Developer
        </div>
        <div class="card-body">
          <h5 class="card-title">Let's Chat!</h5>
          <p class="card-text">Feel free to contact me.</p>
          <a href="#" class="btn btn-primary">Contact Me</a>
        </div>
        <div class="card-footer text-muted">
          Julian Esquivel
        </div>
      </div>
    );
}

export default Footer;
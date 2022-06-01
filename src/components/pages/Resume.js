import React from "react";
import Footer from '../Footer';
import '../../../src/App'

function Resume() {
    return (
        <>
           <div className="resume-container">
               <div className="resume-title-container">
                   <h1>Julian Esquivel</h1>
                   <h3>Web Developer</h3>
               </div>
               <div className="resume-content">
                    <div className="experience-container">
                        <h2 className="experience-title">Experience</h2>
                        <ul className="experience-list">
                            <li>2012-2018 Frank Guzman Interiors</li>
                            <li>2018-Present Freelance Digital Marketer</li>
                        </ul>
                    </div>
                    <div className="education-container">
                        <h2 className="education-title">Education</h2>
                        <ul className="experience-list">
                            <li>2013-2017 G. Holmes Braddock</li>
                            <li>2017-2021 Florida International University</li>
                        </ul>
                    </div>
                    <div className="skill-container">
                        <h2 className="skill-title">Skills</h2>
                        <ul className="experience-list">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>PhotoShop</li>
                            <li>Premiere Pro</li>
                            <li>Light Room</li>
                        </ul>
                    </div>
               </div>
           </div>
           <Footer />
        </>
    )
}

export default Resume;
import React from "react";
import Footer from '../Footer';
import '../../../src/App'




function Portfolio() {
    return (
        <>
        <div className="portfolio-container">
          <h3 className="card-title">Work Day Scheduler</h3>
          <div className="p-card"><img src="/images/workday.png" alt="workday"></img></div>
          <h3 className="card-title">Math Quiz</h3>
          <div className="p-card"><img src="/images/quiz.png" alt="quiz"></img></div>
          <h3 className="card-title">Run Buddy landing page</h3>
          <div className="p-card"><img src="/images/runbuddy.png" alt="runbuddy"></img></div>
        </div>
     <Footer></Footer>
        </>
    )
}

export default Portfolio;
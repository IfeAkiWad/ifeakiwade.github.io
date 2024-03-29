import React from "react"
import PortfolioCommonHealth from "../PortfolioCommonHealth.jpeg"
import PortfolioDayCare from "../PortfolioDayCare.jpeg"
import PortfolioProjectManager from "../PortfolioProjectManager.jpeg"

const ProjectImage = () => {
    return (
        <div>
            <section className="image">
                <div className="polaroid" >
                    <a href="https://github.com/IfeAkiWad/Day_Care" rel="noopener noreferrer" target="_blank"> 
                        <img className="img-day-care" src={PortfolioDayCare} alt="DayCare project"/>
                    </a>
                        
                    <div className="container">
                        <p className="proj-image-text" id="title-day-care"><u><b>Sunny Day Care:</b></u> React/Redux client-side and Ruby on Rails server-side.<br /><br />A React application that maintains a database for a daycare and enrolled children.  </p>
                    </div>
                </div>
                    
                <div className="polaroid" >
                    <a href="https://github.com/IfeAkiWad/Project-Manager_Javascript-project" rel="noopener noreferrer" target="_blank">  
                        <img className="img-proj-manager" src={PortfolioProjectManager} alt="project manager project"/>
                    </a>     
                    <div className="container">
                        <p className="proj-image-text" id="title-proj-manager"><u><b>Project Manager:</b></u> Javascript client-side and Ruby on Rails server-side.<br /><br />Javascript single-page application that creates and manages project tasks.</p>
                    </div>
                </div>    
                <div className="polaroid" >
                    <a href="https://github.com/IfeAkiWad/CommonHealth" rel="noopener noreferrer" target="_blank">    
                        <img className="img-common-health" src={PortfolioCommonHealth} alt="common health project"/>
                    </a>
                    <div className="container">
                        <p className="proj-image-text" id="title-common-health"><u><b>Common Health:</b></u> Ruby on Rails with full MVC Structure.<br /><br /> Ruby on Rails Health-based web application that connects black doctors of various specialties to black patients.</p>
                    </div>        
                </div>
            </section>
        </div>
    )
}
export default ProjectImage
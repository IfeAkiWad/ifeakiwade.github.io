import React from "react"
import PortfolioCommonHealth from "../PortfolioCommonHealth.jpeg"
import PortfolioDayCare from "../PortfolioDayCare.jpeg"
import PortfolioProjectManager from "../PortfolioProjectManager.jpeg"

const ProjectImage = () => {
    return (
        <div id="image">
            <div className="polaroid" >
                <a href="https://github.com/IfeAkiWad/Day_Care" > 
                    <img className="img-day-care" src={PortfolioDayCare} alt="DayCare project"/>
                </a>
                    
                <div className="container">
                    <p id="title-day-care">CommonHealth: Ruby on Rails </p>
                </div>
            </div>
                
            <div className="polaroid" >
                <a href="https://github.com/IfeAkiWad/Project-Manager_Javascript-project">  
                    <img className="img-proj-manager" src={PortfolioProjectManager} alt="project manager project"/>
                </a>     
                <div className="container">
                    <p id="title-proj-manager">CommonHealth: Ruby on Rails </p>
                </div>
            </div>    
            <div className="polaroid" >
                <a href="https://github.com/IfeAkiWad/CommonHealth">    
                    <img className="img-common-health" src={PortfolioCommonHealth} alt="common health project"/>
                </a>
                <div className="container">
                    <p id="title-common-health">CommonHealth: Ruby on Rails </p>
                </div>
                    
           </div>
        </div>
    )
}
export default ProjectImage
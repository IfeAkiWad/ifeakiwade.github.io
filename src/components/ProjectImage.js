import React from "react"
import PortfolioCommonHealth from "../PortfolioCommonHealth.jpeg"
import PortfolioDayCare from "../PortfolioDayCare.jpeg"
import PortfolioProjectManager from "../PortfolioProjectManager.jpeg"

const ProjectImage = () => {
    return (
        <div id="image">
            <a href="https://github.com/IfeAkiWad/Day_Care" > 
                <img className="img-day-care" src={PortfolioDayCare} alt="DayCare project"/>
            </a>  
            <a href="https://github.com/IfeAkiWad/Project-Manager_Javascript-project">  
                <img className="img-proj-manager" src={PortfolioProjectManager} alt="project manager project"/>
            </a>    
            <a href="https://github.com/IfeAkiWad/CommonHealth">    
                <img className="img-common-health" src={PortfolioCommonHealth} alt="common health project"/>
            </a>
        </div>
    )
}
export default ProjectImage
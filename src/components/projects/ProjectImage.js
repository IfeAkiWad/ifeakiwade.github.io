import React from "react"
import PortfolioCommonHealth from "../PortfolioCommonHealth.jpeg"
import PortfolioDayCare from "../PortfolioDayCare.jpeg"
import PortfolioProjectManager from "../PortfolioProjectManager.jpeg"

const ProjectImage = () => {
    return (
        <div id="image">
            <img className="img-day-care" src={PortfolioDayCare} alt="DayCare project"/>
            <img className="img-proj-manager" src={PortfolioProjectManager} alt="project manager project"/>
            <img className="img-common-health" src={PortfolioCommonHealth} alt="common health project"/>
        </div>
    )
}
export default ProjectImage
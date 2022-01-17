import React from "react"
import About from "../about/About";
import Project from "../projects/Project";
import Contact from "../contact/Contact"
import Footer from "../footer/Footer";

const Home = () => {
    return (
        <div id="home">
            <p className="welcome">Welcome to my website! My name is</p>
            <h1>Ifeoluwa Akinremi-Wade.</h1>
            <h2>I'm a Software Engineer.</h2>
            <p>My very first coding language was Ruby, but I've fallen in love with Javascript. I am a growing React developer with experience in Ruby on Rails. </p>
            <br /><br />
            <About />
            <br /><br />
            <Project />
            <br /><br />
            <Contact />
            <Footer />
            
        </div>
    )
}
export default Home
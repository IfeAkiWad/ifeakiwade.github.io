import React from "react"
import About from "../about/About";
import Project from "../projects/Project";
import Contact from "../contact/Contact"
import Footer from "../footer/Footer";

const Home = () => {
    return (
        <div>
            <section id="home">
                <p className="welcome">Welcome to my website! My name is</p>
                <h1 className="my-name">Ifeoluwa Akinremi-Wade.</h1>
                <h2 className="soft-engineer">I'm a Software Engineer.</h2>
                <p>My very first coding language was Ruby, but I've fallen in love with Javascript. I am a growing React developer with experience in Ruby on Rails. </p>
            </section>
            <br /><br />
            <section id="about">
                <About />
            </section>
            <br /><br />
            <section id="project">
                <Project />
            </section>
            <br /><br />
            <section id="contact">
                <Contact />
            </section>
            <Footer />
            
        </div>
    )
}
export default Home
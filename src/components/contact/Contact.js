import React from "react"

const Contact = () => {
    return (
        <div>
            <h1 className="contact-header">Let's Get In Touch!</h1>
            <p className="opportunities">My inbox is open to opportunities!</p>
            <div>
                {/* <button className="email-btn"> */}
                    <a className="email" href= "mailto:ifeoluwa.akinremi.wade@gmail.com" rel="noopener noreferrer" target="_blank">
                        <h4 className="email-text">How Ya Doin'?</h4>
                    </a>
                {/* </button> */}
            </div>
        </div>
    )
}
export default Contact

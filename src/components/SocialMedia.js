import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { MarkGithubIcon } from '@primer/octicons-react';

const SocialMedia = () => {
    return (
        <div class="social-media">
            <a href="https://www.twitter.com/ifeakiwad" className="social" rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://github.com/IfeAkiWad" className="social" rel="noopener noreferrer" target="_blank">
                    <MarkGithubIcon size={30} />
            </a>
        </div>
    )
}
export default SocialMedia
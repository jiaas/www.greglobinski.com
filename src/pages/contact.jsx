import React from "react";
import HeadlineWithFocus from "../components/HeadlineWithFocus";
import Obfuscate from "react-obfuscate";
import { FaEnvelopeO, FaTwitter, FaGithub, FaLinkedinSquare } from "react-icons/lib/fa/";
import Helmet from "react-helmet";

export default props => {
  return (
    <div className="c-content-box">
      <Helmet title="Contact me" />

      <HeadlineWithFocus>
      <span> Hey I just met you, and </span> this is crazy.<span> But here's my number </span>  so call me maybe
      </HeadlineWithFocus>
      <ul className="c-contact-list">
        <li className="c-contact-list__item">
          <FaEnvelopeO />
          <Obfuscate email="javier@ignacioquinteros.cl" />
        </li>
        <li className="c-contact-list__item">
          <FaTwitter />
          <a
            href="https://twitter.com/ignacioquin"
            target="_blank"
            rel="noopener noreferrer"
          >
            @ignacioquin
          </a>
        </li>
        <li className="c-contact-list__item">
          <FaGithub />
          <a
            href="https://github.com/jiaas"
            target="_blank"
            rel="noopener noreferrer"
          >
            Javier Ignacio as a Service
          </a>
        </li>
        <li className="c-contact-list__item">
          <FaLinkedinSquare />
          <a
            href="https://www.linkedin.com/in/javier-ignacio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Javier Quinteros LinkedIn
          </a>
        </li>
      </ul>
      <h2
        className={`
        js-action-button-anchor
        c-content-box__subheadline 
        c-content-box__subheadline--with-button
      `}
      >
        And please, Don't forget
      </h2>
    </div>
  );
};

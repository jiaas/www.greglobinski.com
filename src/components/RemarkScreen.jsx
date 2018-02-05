import React from 'react';
import Link from 'gatsby-link';
import Obfuscate from 'react-obfuscate';
import { FaPaperPlaneO, FaWrench } from 'react-icons/lib/fa';

const ForHomePageContent = (
  <div className="c-remark-screen__message">
    <p>
      <b>Hello!</b><br /> Thank you so much for visiting my website. I hope you like it
    </p>
    <p>
      As you may know, my name is Javier Quinteros 
    </p>
    <p>
      At present, I'm looking for an oportunity as an intern in <b>Santiago de Chile</b>.
    </p>
    <p>
    If you want to get in touch and get a coffee together, drop me a message at <b><Obfuscate email='javier@ignacioquinteros.cl' /></b>.
    </p>
    <p>
    If you want to know what technologies I use, click on the button below.
    </p>
  </div>
);

const ForContactPageContent = (
  <div className="c-remark-screen__message">
    <p>
      <b>Hi there</b><br /> Before you leave
    </p>
    <p>
      I want you to remember that at present, I am open to <b>full time on-site job</b> offers (Warsaw or London).
    </p>
    <p>
      If you feel that you want me on your team, drop me 
      a message at <b><Obfuscate email='greglobinski@gmail.com' /></b>.
    </p>
    <p>
      
    </p>
    <p>
      Thank you<br />
      <b>Greg</b>
    </p>
  </div>
);

const RemarkScreen = (props) => { 
  const links = [ 
    { path: 'toolbox', icon: FaWrench }, 
    //{ path: 'playground', icon: FaPaperPlaneO }
  ];

  return (
    <div className={`c-remark-screen ${props.isActive && 'c-remark-screen--is-active'}`}>
      {props.locationPathName === '/' ? ForHomePageContent : ForContactPageContent}
      {props.locationPathName === '/' &&
        <div className="c-remark-screen__links">
          {
            links.map((link) => (        
              <Link 
                key={link.path}
                className="c-remark-screen__link" 
                to={`/${link.path}/`}
                onClick={props.onClick}
                tabIndex={props.isActive ? '1' : '-1'}
              >
                <link.icon /> {link.path}
              </Link>)
            ) 
          }
        </div>
      }

      <div className="c-remark-screen__bg"></div>
    </div>
  )
};

export default RemarkScreen;

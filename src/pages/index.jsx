import React from "react";

import HeadlineWithFocus from "../components/HeadlineWithFocus";

const Index = props => {
  return (
    <div className="c-content-box">
      <h2>Javier Ignacio Quinteros</h2>
      <HeadlineWithFocus
        modifierClassNames={`
          c-headline-focus 
          c-headline-focus--super-big 
        `}
      >
       Programmer Analyst,
       <br/>
       IT Project Manager
      </HeadlineWithFocus>
      <h2
        className={`
          js-action-button-anchor
          c-content-box__subheadline 
          c-content-box__subheadline--with-button
        `}
      >
        I need to tell you something
      </h2>
    </div>
  );
};

export default Index;

import React from "react";
import HeadlineWithFocus from "../components/HeadlineWithFocus";
import Helmet from "react-helmet";

export default () => (
  <div className="c-content-box">
    <Helmet title="Let's play" />

    <HeadlineWithFocus>
      My blog is under construction
      {/*<span>What's that?</span>*/}
    </HeadlineWithFocus>
    <p>Thank you for the patience</p>
  </div>
);

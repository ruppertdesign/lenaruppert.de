import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import './landing.sass';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <meta name="robots" content="noindex,nofollow" />
      <title>lenaruppert.de</title>
    </Helmet>
    <div>{children()}</div>
  </div>
);

export default TemplateWrapper;

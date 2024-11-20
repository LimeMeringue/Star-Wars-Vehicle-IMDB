// gatsby-ssr.js
import React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="star-wars-font"
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
    />,
  ]);
};

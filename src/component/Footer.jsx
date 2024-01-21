import React from 'react';

const Footer = () => {
  const fullYear = new Date().getFullYear();
  return <footer>copyright @{fullYear}</footer>;
};

export default Footer;

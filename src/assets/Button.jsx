import React from 'react';
import './button.css';

function Button({ name, link, target = '_self' }) {
  const handleClick = () => {
    if (link.startsWith('.') || link.startsWith('#')) {
      const element = document.querySelector(link);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.log('Element not found for link:', link);
      }
    } else if (link) {
      window.open(link, target); 
    } else {
      console.log('Button clicked without a link'); 
    }
  };

  return (
    <div className='Button' onClick={handleClick}>
      {name}
    </div>
  );
}

export default Button;

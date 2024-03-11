import React from 'react';

function ButtonComponent(props) {
  return (
    <button 
      className={props.className} 
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
}

export default ButtonComponent;
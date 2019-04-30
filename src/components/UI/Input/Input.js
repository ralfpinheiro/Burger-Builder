import React from 'react';
import './Input.css';

const input = props => {
  let inputElement = null;

  switch (props.elementType) {
    case 'input':
      inputElement = (
        <input className='InputElement' onChange={props.changed} {...props.elementConfig} value={props.value} />
      );
      break;
    case 'textarea':
      inputElement = (
        <textarea className='InputElement' onChange={props.changed} {...props.elementConfig} value={props.value} />
      );
      break;
    case 'select':
      inputElement = (
        <select className='InputElement' onChange={props.changed} value={props.value}>
          {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input onChange={props.changed} className='InputElement' {...props.elementConfig} value={props.value} />
      );
  }

  return (
    <div className='Input'>
      <label className='Label'>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;

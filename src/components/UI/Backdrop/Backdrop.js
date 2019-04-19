import React from 'react';
import './Backdrop.css';

const backdrop = props => (props.show ? <div onClick={props.clicked} className='Backdrop' /> : null);

export default backdrop;

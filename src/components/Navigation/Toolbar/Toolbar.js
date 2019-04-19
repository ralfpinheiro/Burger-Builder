import React from 'react';
import './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const Toolbar = props => (
  <header className='Toolbar'>
    <div>Menu</div>
    <Logo height='80%' />
    <NavigationItems />
  </header>
);

export default Toolbar;

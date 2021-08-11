import React from 'react';
import '../../styles/header/button.css';
import { Link } from 'react-router-dom';

export function Button() {
  return (
    <Link to='Login'>
      <button className='btn'>Login</button>
    </Link>
  );
};
import React from 'react';
import Delete from './delete';
import Update from './updateBtn';


export default function Control() {
  return (
    <div className='controlContainer'>
      <Update/>
      <Delete/>
    </div>
  );
}


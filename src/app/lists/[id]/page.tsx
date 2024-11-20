import React from 'react';
import Control from './component/control';
import { PagePropType } from '@/app/type/propType';



export default async function ListRead(props:PagePropType) {
  const {id} = props.params;
  const data = await fetch(process.env.API_URL+"/lists/"+id);
  const datajson = await data.json();

  return (
    <div className='listPage'>
      <div className='readContainer'>
        <p>Title : {datajson.title}</p>
        <p style={{'height' : '100%'}}>Body : {datajson.body}</p>
      </div>
      <Control/>
    </div>
  );
}


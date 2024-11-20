import Link from 'next/link';
import React from 'react';
import { listType } from '../type/listType';

export default async function ListComponent() {
  const resp = await fetch('http://localhost:9999/lists', {cache : 'no-store'});
  const result = await resp.json();

  return (
    <div className='listContainer'>
      {
        result.map((list : listType)=>(
          <div key={list.id} style={{'width' : '100%', 'textAlign':'center'}}>
           <Link href={`/lists/${list.id}`} style={{'color' : 'brown'}}>{list.title}</Link>
          </div>
        ))
      }
      
    </div>
  );
}


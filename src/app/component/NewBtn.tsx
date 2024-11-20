import React from 'react';
import Link from 'next/link';

export default function NewBtn() {
  //해당 버튼을 누르면 create로 라우팅되도록 한다.

  return (
    <div className='newBtn'><Link href={"/create"}>New</Link></div>
  );
}


'use client';
import { useParams, useRouter } from 'next/navigation';
import React from 'react';

export default function Update() {
  const router = useRouter();
  const params = useParams();

  const handleUpdateClick = ()=>{
    const {id} = params;
    router.push('/update/'+id);
  }

  return (
    <button onClick={handleUpdateClick}>수정하기</button>
  );
}


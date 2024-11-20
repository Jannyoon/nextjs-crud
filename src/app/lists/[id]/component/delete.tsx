'use client';
import { useParams, useRouter } from 'next/navigation';
import React from 'react';

export default function Delete() {
  const router = useRouter();
  const params = useParams();

  const handleDeleteClick = ()=>{
    const option = {method : 'DELETE'};
    fetch(process.env.NEXT_PUBLIC_API_URL+"/lists/"+params.id, option)
    .then(resp => resp.json())
    .then((result)=>{
      console.log("결과 출력", result);
      router.push('/');
      router.refresh();
    })
  }
  return (
    <button onClick={handleDeleteClick}>삭제하기</button>
  );
}


'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

///lists/${list.id}
export default function Create() {
  const router = useRouter();
  const handleSubmit = (e:React.FormEvent)=>{
    e.preventDefault();
    const title = e.target.title.value;
    const body = e.target.body.value;

    const option = {
      method : 'POST',
      header : {
        'Content-type' : 'appliction/json'
      },
      body : JSON.stringify({title, body})
    }

    //.env.local 내 환경 변수 NEXT_PUBLIC_API_URL = http://localhost:9999 
    fetch(process.env.NEXT_PUBLIC_API_URL+"/lists",option)
    .then(resp => resp.json())
    .then(()=> {
      //const lastId = result.id;
      router.push('/')
      //router.push(`lists/${lastId}`);
      router.refresh();
    })
  }

  return (
    <form className='createContainer' onSubmit={handleSubmit}>
      <p><input name="title" placeholder='title'/></p>
      <p className='textareaContainer'>
        <textarea name="body" placeholder='body'/>
      </p>
      <button type='submit' style={{'margin': '1rem'}}>새로운 글 등록하기</button>
    </form>
  );
}


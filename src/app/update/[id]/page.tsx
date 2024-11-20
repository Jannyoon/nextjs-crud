'use client';

import { listType } from '@/app/type/listType';
import { useRouter, useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function Update() {
  const router = useRouter();
  const param = useParams();
  const {id} = param;
  const [post, setPost] = useState<listType>({title:'', body:''});
  const {title, body} = post;

  useEffect(()=>{
    fetch(process.env.NEXT_PUBLIC_API_URL+`/lists/${id}`)
    .then(resp => resp.json())
    .then((result)=>setPost(result))   
  },[id])

  const handleChange = (e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setPost({...post, [name]:value})
  }

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const option = {
      method : 'PATCH',
      header : {'Content-Type' : 'application/json'},
      body : JSON.stringify(post)
    }

    fetch(process.env.NEXT_PUBLIC_API_URL+"/lists/"+id, option)
    .then(resp => resp.json())
    .then(()=>{
      router.push('/lists/'+id);
      router.refresh();
    })
  }


  return (
    <form className='createContainer' onSubmit={handleSubmit}>
      <p><input name='title' placeholder='title' value={title} onChange={handleChange}/></p>
      <p  className='textareaContainer'>
        <textarea name='body' placeholder='body' value={body} onChange={handleChange}/>
      </p>
      <button type='submit' style={{'margin': '1rem'}}>수정하기</button>
    </form>
  );
}


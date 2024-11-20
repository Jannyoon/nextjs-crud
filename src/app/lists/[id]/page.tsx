import React from 'react';

type PagePropType = {
  params : PageParam;
}

type PageParam = {
  id : string;
}

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
      <div > {/*Control하는 부분은 client Component로 다시 만들 예정 */}
        <button>수정하기</button> 
        <button>삭제하기</button>
      </div>
    </div>
  );
}


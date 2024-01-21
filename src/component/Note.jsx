import React from 'react';
import { data } from '../data/data';

const Note = () => {
  
  function Card(data) {
    console.log(data);
    return (
      <note>
        {data?.data?.map((item) => (
          <note>
            <img src={item.img} alt='' />
            <p>{item.name}</p>
            <p>{item.email}</p>
          </note>
        ))}
      </note>
    );
  }

  return (
    <>
      <Card data={data} />
    </>
  );
};

export default Note;

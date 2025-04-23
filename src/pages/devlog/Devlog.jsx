import React from 'react'
import data from '../../assets/devlog/devlog.json'
export default function Devlog() {
  return (
    <>
        {data.map(i => (
            <div>
                {i.title}
            </div>            
        ))}
    </>
  );
}
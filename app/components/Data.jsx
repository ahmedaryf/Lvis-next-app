import React from 'react'

const getData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json()
}

export default async function Data() {
    const data = await getData();
  return (
    <div>
       {
        data.map((item, index) => {
            return (
                <h4 key={index}>{item.id}</h4>

            )
        })
       }

    </div>
  )
}

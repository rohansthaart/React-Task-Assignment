import React, { useState,useEffect } from 'react'

export default function Apiuse() {
    const [datas,setDatas] = useState([])
    const [loading,setLoading] = useState(false)
    const url = 'https://jsonplaceholder.typicode.com/users';

    const fetchPost = async ()=>{
        setLoading(true)
      try{
          const response = await fetch(url);
          const data = await response.json();
          
          
          setDatas(data)
          console.log(datas);
         setLoading(false)
        
      }catch(error){
          console.log(error);
          setLoading(false)
      }  
    }

    useEffect(()=>{
        fetchPost()
    },[])
    if(loading){
        return <h1>loading...</h1>
    }else{
  return (
    <section className="container">
        <h1>2. API CALL</h1>
        <ul>
        {datas.map((item)=>{
            const {id,name,username,email} = item
            return <li key={id}>
                    {name}{username} {email}
            </li>
        })}

        </ul>
        
    </section>
  )
}}


import React,{useState} from 'react'
import axios from 'axios'

function Form() {
const [table,setTable] = useState([])
const [layout,setLayout] = useState('')
const [name,setName] = useState('')
const [capacity,setCapacity] = useState('')
const [status,setStatus] = useState(false)
const [pic, setPic] = useState(null);
const [loding,setLoding]= useState(false)

const handleSubmit=(e)=>{
  e.preventDefault()
  setLoding(true);
  fetch("https://jsonplaceholder.typicode.com/posts",{
    method:"POST",
    headers:{
      "Content-Type": "application/json"
    },
    body:JSON.stringify({
      layout,name,capacity,status
    }),
  }).then((res)=>res.json())
    .then((result)=>{
      result.status === 200?console.log('success'): console.log('fail')
      setLoding(false)
    })
    .catch((err)=>{
      console.log(err);
      setLoding(false)
    })

  };
  
  
  
  return (
    <section>
      <form className='search-form'> 
        <label htmlFor='layout'>Layout : </label>  
        <select   onChange={(e)=>setLayout(e.target.value)}> 
          <option value="Select Layout" >Select Layout</option>
          <option value="2X2" >2X2</option>
          <option value ="3X3">3X3</option>
        </select><br/><br/>

        <label >Name: </label>
        <input type="text" placeholder='Enter Name'  onChange={(e)=>setName(e.target.value)}/><br/><br/>

        <label >Capacity: </label>
        <input type="text" placeholder='Enter number of capacity' onChange={(e)=>setCapacity(e.target.value)}/><br/><br/>

        <label >status: </label>
        <input type="checkbox"   onChange={(e)=>setStatus(!status)}/>
         
        {/* <input type="file"  
           onChange={(e) => {
            setPic(e.target.files[0]);

            setLocalUrl(URL.createObjectURL(e.target.files[0]));
          }}
        /> */}

        
        <input type="submit" value="Create Table" className='btn btn-primary' onClick={handleSubmit}/>
        <button className='btn btn-danger'>Cancel</button>
      </form>
        <div>
            s
        </div>

    </section>
  )
}

export default Form

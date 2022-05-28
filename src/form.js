import React,{useState} from 'react'
import axios from 'axios'

function Form() {
const [table,setTable] = useState([])
const [layout,setLayout] = useState('')
const [name,setName] = useState('')
const [capacity,setCapacity] = useState('')
const [status,setStatus] = useState(false)



const handleSubmit=(e)=>{
  e.preventDefault();
  if (layout && name && capacity){
      const newTable = {layout,name,capacity,status}
      setTable((table)=>{
        return [...table,newTable]
      })
      setLayout('Select Layout')
      setName('')
      setCapacity('')
     console.log(table);
      
         }
    
  };
  
  
  
  return (
    <section>
      <form className='search-form'> 
        <label htmlFor='layout'>Layout : </label>  
        <select  value={layout} onChange={(e)=>setLayout(e.target.value)}> 
          <option value="Select Layout" >Select Layout</option>
          <option value="2X2" >2X2</option>
          <option value ="3X3">3X3</option>
        </select><br/><br/>

        <label >Name: </label>
        <input type="text" placeholder='Enter Name' value={name}  onChange={(e)=>setName(e.target.value)}/><br/><br/>

        <label >Capacity: </label>
        <input type="text" placeholder='Enter number of capacity' onChange={(e)=>setCapacity(e.target.value)}/><br/><br/>

        <label >status: </label>
        <input type="checkbox"  value="status"  onChange={(e)=>{
          if(status){
            setStatus(e.target.value)
          }else{
            setStatus(e.target.value)
          }
          
        }}></input><br/><br/>

        
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
// const [selectedFile,setSelectedFile] = useState(null)

// const fileSelectedHandler=(event)=>{
//     const files = e.target.files
//     const data = new FormData()
//     data.append('file',files[0])
//     data.append('upload_preset', 'darwin')
//     setSelectedFile(event.target.file[0])
// }
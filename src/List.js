import React from 'react'
import {FaEdit,FaTrash} from 'react-icons/fa'

function List({items, removeItem, editItem}) {
  return (
    <div>
       <table className="table">
  <thead>
    <tr>
      <th scope="col">#id</th>
      <th scope="col">layout</th>
      <th scope="col">name</th>
      <th scope="col">capacity</th>
      <th scope="col">status</th>
      <th scope="col">Image</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    
        {items.map((item)=>{
            const {id,layout,name,capacity,status,file} = item
            return <tr key={id}>
                <td>
                    {id}
                </td> 
                <td>
                    {layout}
                </td> 
                
                <td>
                    {name}
                </td> 
                <td>
                    {capacity}
                </td> 
                <td>
                    {status?'true':'false'}
                </td> 
                <td>
                    <img src={file} alt="" style={{height:'50px',width:'50px',objectFit: 'cover'}} />
                </td>
                <td>
                   <FaEdit onClick={()=>editItem(id)}/>
                </td>
                <td>
                    <FaTrash  onClick={()=>removeItem(id)}/>
                </td>
             </tr>
        })}

       
        </tbody>
</table>
    </div>
  )
}

export default List
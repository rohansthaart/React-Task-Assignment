import React,{useState,useRef} from 'react'
import { Button,Form,Row,Col} from 'react-bootstrap'
import List from './List'


function Forms() {
const [table,setTable] = useState([])
const [layout,setLayout] = useState('Select Layout')
const [name,setName] = useState('')
const [capacity,setCapacity] = useState('')
const [status,setStatus] = useState(false)
const [file,setFile]= useState()
const [isEditing, setIsEditing] = useState(false);
const [editID,setEditID] = useState(null);
const inputRef = useRef(null);

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(!name || !capacity || !file){
      alert('missing value')
    }
    else if(name && capacity && isEditing){
      setTable(table.map((item)=>{
        if(item.id===editID){
          return{...item,layout:layout,name:name,capacity:capacity,status:status,file:file}
        
        }
        return item
      }))
      
     clearAll()
      alert('done editing')
    } 
    else{
    const newItem = {id:new Date().getTime().toString(),layout,name,capacity,status,file}
    setTable([...table,newItem])
    console.log(table);
    clearAll()
    }
  }
  
  const removeItem =(id)=>{
    setTable(table.filter((item)=>item.id!== id))
  }

  const editItem=(id)=>{
    const specificItem = table.find((item)=>item.id === id);
    setIsEditing(true);
    setEditID(id)
    setName(specificItem.name)
    setLayout(specificItem.layout)
    setCapacity(specificItem.capacity)
    setStatus(specificItem.statuts)
    setFile(specificItem.file)
  }

const resetFileInput = () => {
  inputRef.current.value = null;
};

const handleCancel=()=>{
clearAll()

}
const clearAll =()=>{
  setLayout('Select Layout')
  setName('')
  setCapacity('')
  setStatus(false)
  resetFileInput()
  setEditID(null);
  setIsEditing(false);
}


  return (
   <div className="container">
     <h6>        
       {isEditing?'Editing':'Create Table'}
       </h6>
       <hr/>
     <Form>
      <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Layout:
            </Form.Label>
        <Col sm="10">
          <Form.Select onChange={(e)=>setLayout(e.target.value)} value={layout} >
            <option >Select Layout</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
      </Form.Group>


  <Form.Group as={Row} className="mb-3" >
    <Form.Label column sm="2">
     Name:
    </Form.Label>
    <Col sm="10">
    <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" >
    <Form.Label column sm="2">
     Capacity:
    </Form.Label>
    <Col sm="10">
    <Form.Control type="text" placeholder="Enter number of capacity" value={capacity} onChange={(e)=>setCapacity(e.target.value)}/>
    </Col>
  </Form.Group>


  <Form.Group as={Row} className="mb-3" >
    <Form.Label column sm="2">
      Status:
    </Form.Label>
    <Col sm="10">
    <Form.Check type="checkbox" className='check' checked={status} onChange={(e)=>setStatus(!status)}/> 
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3">
    <Form.Label column sm="2">
      Image:
    </Form.Label>
    <Col sm="10">
    <input type="file" ref={inputRef} onChange={(e)=>{
      e.preventDefault()
      setFile(URL.createObjectURL(e.target.files[0]))}}/>
    </Col>
  </Form.Group>
 
<Button type="submit" className='btn btn-primary' onClick={handleSubmit}>{isEditing?'Edit':'Create Table'}</Button>
{/* <Button className='btn btn-danger' onClick={()=>setIsEditing(false)}>{isEditing?'Cancel Edit':'Cancel'}</Button> */}
<Button className='btn btn-danger' onClick={handleCancel}>{isEditing?'Cancel Edit':'Cancel'}</Button>
</Form>
<hr />
  <List items={table} removeItem={removeItem} editItem={editItem}/>
</div>
  )
}

export default Forms

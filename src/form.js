import React,{useState} from 'react'
import { Button,Form,Row,Col} from 'react-bootstrap'
import List from './List'


function Forms() {
const [table,setTable] = useState([])
const [layout,setLayout] = useState('Select Layout')
const [name,setName] = useState('')
const [capacity,setCapacity] = useState('')
const [status,setStatus] = useState(false)
const [pic, setPic] = useState(null);
const [loding,setLoding]= useState(false)
const [localUrl,setLocalUrl] = useState(null)
const [isEditing, setIsEditing] = useState(false);
const [editID,setEditID] = useState(null);

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(!name && !capacity){
      alert('missing value')
    }
    else if(name && capacity && isEditing){
      setTable(table.map((item)=>{
        if(item.id===editID){
          return{...item,layout:layout,name:name,capacity:capacity,status:status}
        
        }
        return item
      }))
      setLayout('Select Layout')
      setName('')
      setCapacity('')
      setStatus(false)
      setEditID(null);
      setIsEditing(false);
      alert('done editing')
    } 
    else{
    const newItem = {id:new Date().getTime().toString(),layout,name,capacity,status}
    setTable([...table,newItem])
    console.log(table);
    setLayout('Select Layout')
    setName('')
    setCapacity('')
    setStatus(false)
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

  }

  const onFileChange=(e)=>{
    console.log(e.target.files[0])
  }

  return (
   <div className="container">
     <h2>1.       
       {isEditing?'Editing':'Create New'}
       </h2>
     <Form>
      <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Layout:
            </Form.Label>
        <Col sm="10">
          <Form.Select onChange={(e)=>setLayout(e.target.value)} >
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
    <Form.Control type="text" placeholder="Enter number of capacity"  onChange={(e)=>setCapacity(e.target.value)}/>
    </Col>
  </Form.Group>


  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Status:
    </Form.Label>
    <Col sm="10">
    <Form.Check type="checkbox" className='check'  onChange={(e)=>setStatus(!status)}/> 
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Image:
    </Form.Label>
    <Col sm="10">
    <input type="file" onChange={onFileChange}/>
    </Col>
  </Form.Group>
 
<Button type="submit" className='btn btn-primary' onClick={handleSubmit}>{isEditing?'Edit':'Create Table'}</Button>
<Button className='btn btn-danger' onClick={()=>setIsEditing(false)}>Cancel</Button>
</Form>
  <List items={table} removeItem={removeItem} editItem={editItem}/>
</div>
  )
}

export default Forms

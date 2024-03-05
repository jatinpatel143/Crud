import { TextField ,Button} from '@mui/material'
import SaveIcon from '@mui/icons-material/Save';
import React, {  useEffect, useState } from 'react'
import { add, update } from '../todos/TodoSlice';
import { useDispatch, useSelector} from 'react-redux';
// import { Edit } from '@mui/icons-material';  

const Form = () => {

  const {edit}= useSelector(state=>state.todos)

  
  const dispatch = useDispatch();
const [title,settitle]= useState("");
const [description ,setdescription] = useState("");

const handlesubmit = (e)=>{
e.preventDefault();


if(edit.isedit){
dispatch(update({
  id : edit.todo.id,
  title,
  description
}))
}else{
  const newtodo = {
    id : crypto.randomUUID(),
    title,
    description,
    
  }
  dispatch(add(newtodo))
  }
  settitle("");
  setdescription("")
}



useEffect(()=>{
settitle(edit.todo.title)
setdescription(edit.todo.description)
},[edit])



  return (
    <form style={{margin :"50px 0px",background:"grey",padding:"20px 20px"}} onSubmit={handlesubmit}>
     <TextField variant='outlined' label="Enter Tittle" value={title} fullWidth onChange={(e)=>settitle(e.target.value)} required ></TextField>
     <TextField sx={{margin:"20px 0px"}} label="Enter Dresprisition" value={description} variant='outlined' rows={5} fullWidth multiline onChange={(e)=>setdescription(e.target.value)} required/>
     <Button variant="contained" color ="success" fullWidth type='submit'>Save <SaveIcon/></Button>
    </form>
  )
}

export default Form
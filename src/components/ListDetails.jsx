import {Divider, ListItem, Typography, Box, Button} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch,} from 'react-redux';
import { remove ,edit} from '../todos/TodoSlice';


const ListDetails = ({todo}) => {

const dispatch = useDispatch();

const handledelete = (id)=>{
dispatch(remove(id))
}
const handleedit = (todo)=>{
dispatch(edit(todo))
}

  return (
    <>
    <ListItem sx={{background : "grey"}}>
  <Box sx={{flexGrow:1,color :""}}>
  <Typography variant='h4'>{todo.title}</Typography>
  <Typography variant='h5'>{todo.description}</Typography>
  </Box>
  <Box>
    <Box>
    <Button variant='contained' color='warning' size='small' onClick={()=>handleedit(todo)}>Edit<EditIcon/></Button>
    <Button variant='contained' color='error' size='small'onClick={()=>handledelete(todo.id)} >Delete <DeleteIcon/></Button>
    </Box>
  </Box>
</ListItem>
<Divider />
    </>
  )
}

export default ListDetails
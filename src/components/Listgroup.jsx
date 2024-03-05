import {List} from '@mui/material'
import ListDetails from './ListDetails';
import { useSelector } from 'react-redux';

const Listgroup = () => {

  const {allTodos} = useSelector((state) => state.todos)
  
  return (
    <List>
{
  allTodos.map((todo)=> <ListDetails key={todo.id} todo={todo}/>)
}
    </List>
  )
}

export default Listgroup;
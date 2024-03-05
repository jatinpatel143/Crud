import { Typography,Container } from "@mui/material"
import Navbar from "./components/Navbar"
import Form from "./components/Form"
import Listgroup from "./components/Listgroup"

const App = () => {

  return (
    <>
   <Navbar/>
   <Container sx={{padding:"80px 20px",background:"",height:"00px"}}>
    <Typography variant="h3" align="center" color={"red"} fontWeight={"600"}>CRUD APP</Typography>
<Form/>
<Listgroup/>
   </Container>
    </>
  )
}

export default App
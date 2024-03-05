import { AppBar, Button, Toolbar, Typography,} from '@mui/material'
import ColorLensIcon from '@mui/icons-material/ColorLens';
import React from 'react'

const Navbar = () => {

    const veer = {
        background : "black"
    }

  return (
    <AppBar>
        
<Toolbar sx={veer}>
<Typography sx={{flexGrow:1}} variant='h6'>CEUD_APP</Typography>
<Button variant='contained' color='warning'>change Theme<ColorLensIcon/></Button>
 </Toolbar>    
    
    </AppBar>
  )
}

export default Navbar
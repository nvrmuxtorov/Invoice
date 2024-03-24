import React, { Component } from 'react'
import { Box,Typography } from '@mui/material'
export default class Invoice4 extends Component {
  render() {
    return (
        <Box sx={{display:"flex",padding:"10px",gap:"10px"}}>
        <Box sx={{display:"flex",flexDirection:"column",gap:"5px"}}>
        <Box sx={{border:"2px solid grey",padding:"15px"}} >
        <Typography> Delivery 4 <br/> (customor details) </Typography>
        </Box>
        <Box sx={{border:"2px solid grey",padding:"15px"}} >
        <Typography> Invoice customer4 <br/> (customor details) </Typography>
        </Box>
        <Box sx={{border:"2px solid grey",padding:"15px"}} >
        <Typography> Invoice calculation 4<br/> (customor details) </Typography>
        </Box>
    </Box>
    <Box sx={{display:"flex",flexDirection:"column",gap:"5px"}}>
    <Box sx={{padding:"5px 0 5px 10px",border:"2px solid grey",width:"50vw"}}>
<Typography>Product 4</Typography>
<Box sx={{padding:"5px 5px 5px 10px",border:"2px solid grey",width:"48vw"}} >
<Typography>Product details
    <hr />
    <hr />
     </Typography>
</Box>
     </Box>
     <Box sx={{padding:"5px 0 5px 10px",border:"2px solid grey",width:"50vw"}}>
<Typography>Product 4</Typography>
<Box sx={{padding:"5px 5px 5px 10px",border:"2px solid grey",width:"48vw"}} >
<Typography>Product details
    <hr />
    <hr />
     </Typography>
</Box>
     </Box>
     <Box sx={{padding:"5px 0 5px 10px",border:"2px solid grey",width:"50vw"}}>
<Typography>Product4</Typography>
<Box sx={{padding:"5px 5px 5px 10px",border:"2px solid grey",width:"48vw"}} >
<Typography>Product details
    <hr />
    <hr />
     </Typography>
</Box>
     </Box>
    </Box>
    </Box>
    )
  }
}

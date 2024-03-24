import React, { Component } from 'react'
import { Box,Button,Container } from '@mui/material'
import Invoice1 from '../components/Invoice1'
import Invoice2 from '../components/Invoice2'
import Invoice4 from '../components/Invoice4'
import Invoice3 from '../components/Invoice3'
export default class Home extends Component {
    state = {
    Invoice:Invoice1,
    }
    first =()=>{
        this.setState({
Invoice:Invoice1
        })
    }
    second =()=>{
        this.setState({
Invoice:Invoice2
        })
    }
    third =()=>{
        this.setState({
Invoice:Invoice3
        })
    }
    fourth =()=>{
        this.setState({
Invoice:Invoice4
        })
    }
  render() {
  
    return (
     <Container sx={{marginTop:"5px",display:"flex",flexDirection:'column',alignItems:"center"}} maxWidth="1420">
<Box sx={{border:"2px solid grey",padding:"0 5px " } }>
    <Box  >
<Button  onClick={this.first} sx={{width:"16vw",borderColor:"black"}} variant='outlined'color="inherit"  >Invoice1</Button>
<Button onClick={this.second} sx={{width:"16vw",borderColor:"black"}} variant='outlined' color="inherit" >Invoice2</Button>
<Button  onClick={this.third}sx={{width:"16vw",borderColor:"black"}} variant='outlined'color="inherit"  >Invoice3</Button>
<Button  onClick={this.fourth} sx={{width:"16vw",borderColor:"black",}} variant='outlined'color="inherit" >Invoice4</Button>
</Box>
{ <this.state.Invoice/>}
</Box>
        </Container>
    )
  }
}

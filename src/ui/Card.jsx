import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({title,des,status,id,deleteTodo,editTodo,item}) => {
    
  const navigate=useNavigate();
    const handleDelete=(id)=>{
        deleteTodo(id)
    }
    const handleEdit =(item)=>{
        navigate('/edit',{state:item})
    } 
  return (
    <Box>
      <Paper elevation={1} className='p-5 relative'>
        <Grid container spacing={2} className='!w-[20rem] sm:!w-[40rem] !text-center' >
          <Grid item xs={12} md={6}>
            <Typography  className='!font-bold   text-center sm:text-end'>
              Title: 
            </Typography>
           </Grid>
           <Grid item  xs={12} md={6}>
            <Typography className=''>
              {title}
            </Typography>
           </Grid>
           <Grid item  xs={12} md={6}>
            <Typography className='!font-bold   text-center sm:text-end  '>
             Description:
            </Typography>
           </Grid>
           <Grid item  xs={12} md={6}>
            <Typography className='' sx={{wordWrap:'break-word'}}>
              {des}
            </Typography>
           </Grid>
           <Grid item  xs={12} md={6}>
            <Typography className='!font-bold   text-center sm:text-end'>
             Status:
            </Typography>
           </Grid>
           <Grid item  xs={12} md={6}>
            <Typography className=' ' sx={{wordWrap:'break-word'}}>
              {status}
            </Typography>
           </Grid>

        </Grid>
        <Box className='sm:absolute sm:top-[50%] sm:translate-y-[-50%] flex flex-col'>
        <Button onClick={()=> handleEdit(item)} className='!bg-delete-button !text-white'>EDIT</Button>
        <Button onClick={()=> handleDelete(id)}>DELETE</Button>
        </Box>
      </Paper>


      
    </Box>
    // <Paper elevation={3} className=' mt-5 flex flex-col sm:flex-row  overflow-hidden !text-white'>
    //   <Box className='bg-background  p-2 w-[25rem]'>
    //     <Typography>
    //        <span className='font-bold text-[18px]'>Title:</span> {title} 
    //     </Typography>
    //     <Typography>
    //        <span className='font-bold text-[18px]'>Description:</span> {des} 
    //     </Typography>
    //     <Typography>
    //        <span className='font-bold text-[18px]'>Status:</span> {status} 
    //     </Typography>
    //     </Box>
    //     <Box className='bg-transparent flex justify-center items-center mt-2 sm:m-0 '>
    //         <Button variant='text' className='!save-btn' onClick={()=>{handleEdit(item)}}>EDIT</Button>
    //         <Button variant='contained' className='custom-btn !mr-3' onClick={()=> handleDelete(id)}>DELETE</Button>
    //     </Box>
        
    // </Paper>
  )
}

export default Card
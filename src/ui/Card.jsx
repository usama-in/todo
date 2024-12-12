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
    <div className=' mt-5 flex flex-col sm:flex-row  overflow-hidden'>
        <div className='bg-background  p-2 w-[25rem]'>
        <p>
           <span className='font-bold text-[18px]'>Title:</span> {title} 
        </p>
        <p>
           <span className='font-bold text-[18px]'>Description:</span> {des} 
        </p>
        <p>
           <span className='font-bold text-[18px]'>Status:</span> {status} 
        </p>
        </div>
        <div className='bg-transparent flex justify-center items-center mt-2 sm:m-0 '>
            <button className='save-btn' onClick={()=>{handleEdit(item)}}>EDIT</button>
            <button className='custom-btn' onClick={()=> handleDelete(id)}>DELETE</button>
        </div>
        
    </div>
  )
}

export default Card
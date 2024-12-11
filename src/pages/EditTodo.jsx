import React from 'react'
import { useLocation } from 'react-router-dom'
import FormComponent from '../components/FormComponent';

const EditTodo = () => {
  const location= useLocation();
  const item= location.state;
  console.log(item)
  return (
    <div>
      <FormComponent  item={item} isEditMode={true}/>  
    </div>
  )
}

export default EditTodo
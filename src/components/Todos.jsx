import React, { useEffect, useState } from "react";
import Card from "../ui/Card";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Todos = () => {
 
  
  const [toDos, setToDos] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();
  const todoData = location.state;
  
  
    //getting ToDos list from local storage and update state on first render
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) ||[]
    setToDos(storedTodos);
  }, []);

  //function to delete item
  const handleDelete=(id)=>{
   
    const updatedTodosAfterDelete= toDos.filter(item => item.id != id)

    setToDos(updatedTodosAfterDelete)
    localStorage.setItem('todos' , JSON.stringify(updatedTodosAfterDelete))
    
  }

  

  return (
    <div className=" text-text-color">
      <span className="">
        <Link className="save-btn flex flex-col sm:flex-row justify-center items-center " to={"/create"}>
          ADD TODO
        </Link>
      </span>
      {toDos.length===0 ? (
        <p className="text-black flex  justify-center items-center">
          Nothing in Tasks List ADD one!
        </p>
      ) : (
        toDos.map((item) => (
          <Card
          item={item}
            title={item.title}
            des={item.description}
            status={item.status}
            key={item.id}
            id={item.id}
            deleteTodo={handleDelete}
            
          />
        ))
      )}
    </div>
  );
};

export default Todos;

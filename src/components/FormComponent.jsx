import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const FormComponent = ({ item = {}, isEditMode = false }) => {
  const [todoData, setTodoData] = useState({
    title: item.title || "",
    description: item.description || "",
    status: item.status || "",
  });

  const navigate = useNavigate();
  const handleChange = (event) => {
    const { name, value } = event.target;

    setTodoData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!todoData.title || !todoData.description || !todoData.status) {
      alert("All fields Required");
    } else {
      //on creating new toDo
      if (!isEditMode) {
        const randomNumber = Math.random();
        const addIdToTodo = { ...todoData, id: randomNumber };
        const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
        const updatedTodos = [...storedTodos, addIdToTodo];

        localStorage.setItem("todos", JSON.stringify(updatedTodos));
        navigate("/todos");
      }
      //check if todo is editable or not
      if (isEditMode) {
        const itemToEdit = { ...todoData, id: item.id };
        const localStorageTodo =
          JSON.parse(localStorage.getItem("todos")) || [];
        const toDosAfterEdit = localStorageTodo.map((todoItem) =>
          todoItem.id === itemToEdit.id ? itemToEdit : todoItem
        );
        localStorage.setItem("todos", JSON.stringify(toDosAfterEdit));
        navigate("/todos");
      }
    }
  };

  //nevigate to main page
  const handleCancel = (event) => {
    event.preventDefault();
    navigate("/todos");
  };

  return (
    <div>
      <form className="max-w-lg mx-auto p-6 bg-background text-text-color rounded-lg shadow-md">
        <h1 className="text-center mb-5 text-[18px] font-bold">
          {isEditMode ? <p>Edit Todo</p> : <p>Create New ToDo</p>}
        </h1>
        <div className=" grid grid-cols-1 gap-4 sm:grid-cols-2 items-center mb-4">
          {/* Title Field */}
          <label
            htmlFor="title"
            className="text-center sm:text-right font-medium "
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="px-3 py-2 border rounded-md focus:ring focus:ring-blue-300  text-black"
            placeholder="Enter title"
            onChange={handleChange}
            required
            value={todoData.title}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center mb-4">
          {/* Description Field */}
          <label
            htmlFor="description"
            className="text-center sm:text-right font-medium"
          >
            Description
          </label>
          <textarea
            id="description"
            rows="4"
            name="description"
            className="px-3 py-2 border rounded-md focus:ring focus:ring-blue-300  text-black"
            placeholder="Enter description"
            required
            onChange={handleChange}
            value={todoData.description}
          ></textarea>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center mb-4">
          {/* Radio Buttons */}
          <label className="text-center sm:text-right font-medium ">
            Choose Option
          </label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="status"
                value="completed"
                className="focus:ring focus:ring-blue-300"
                required
                onChange={handleChange}
                checked={todoData.status === "completed"}
              />
              <span>Completed</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="status"
                value="inProgress"
                className="focus:ring focus:ring-blue-300"
                required
                onChange={handleChange}
                checked={todoData.status === "inProgress"}
              />
              <span>In Progress</span>
            </label>
          </div>
        </div>

        <div className="text-center sm:text-right">
          <button className="custom-btn" onClick={handleSubmit}>
            {isEditMode ? "Edit" : "Create"}
          </button>
          <button className="delete-button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;

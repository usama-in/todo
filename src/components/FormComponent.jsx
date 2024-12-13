import {
  Box,
  FormControl,
  Grid,
  Input,
  InputLabel,
  TextField,
  Typography,
  FormHelperText,
  RadioGroup,
  FormControlLabel ,
  Radio,
  Button,
  Paper,
} from "@mui/material";
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


  //navigate to main page
  const handleCancel = (event) => {
    event.preventDefault();
    navigate("/todos");
  };

  return (

    <Box
      component="form"
      onSubmit={handleSubmit}
      autoComplete="off"
      sx={{
        maxWidth: 500,
        margin: "auto",
        padding: 3,
        border: "1px solid #ccc",
        borderRadius: 2,
        boxShadow: 2,
      }}
    >
      <Typography variant="h5" align="center" marginBottom={2}>
        {isEditMode ? "Edit Todo" : "Create Todo"}
      </Typography>

      {/* Title */}
      <TextField
        label="Title"
        variant="outlined"
        fullWidth
        required
        margin="normal"
        name="title"
        value={todoData.title}
        onChange={handleChange}
      />

      {/* Description */}
      <TextField
        label="Description"
        variant="outlined"
        fullWidth
        required
        margin="normal"
        multiline
        rows={3}
        name="description"
        value={todoData.description}
        onChange={handleChange}
      />

      {/* Status */}
      <Typography variant="body1" marginTop={2}>
        Status
      </Typography>
      <RadioGroup
        row
        value={todoData.status}
        onChange={handleChange}
        name="status"
        sx={{ justifyContent: "space-between", marginBottom: 2 }}
      >
        <FormControlLabel
          value="completed"
          control={<Radio />}
          label="Completed"
        />
        <FormControlLabel
          value="inProgress"
          control={<Radio />}
          label="In Progress"
        />
      </RadioGroup>

      {/* Actions */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
        <Button type="submit" variant="contained" color="primary">
          {isEditMode ? "Edit" : "Create"}
        </Button>
        <Button variant="outlined" color="secondary" onClick={handleCancel}>
          Cancel
        </Button>
      </Box>
    </Box>
    
  );
};

export default FormComponent;

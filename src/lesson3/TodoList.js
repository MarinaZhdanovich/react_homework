import React, { useState } from 'react';
import { TextField, Button, Card, IconButton, Typography, CardContent, CardActions } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const deleteTask = (taskToDelete) => {
    setTasks(tasks.filter(task => task !== taskToDelete));
  };

  return (
    <div style={{ marginTop: '100px', paddingLeft: '100px' }}>
      <TextField
        id="outlined-basic"
        label="Новая задача"
        variant="outlined"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        type="text" />
      <Button variant="contained" onClick={addTask}>Добавить задачу</Button>
      <div style={{ marginTop: '20px' }}>
        {tasks.map((task, index) => (
          <Card key={index} sx={{
            maxWidth: 400,
            height: 150,
            mb: 2,
          }}>
            <CardContent>
              <Typography variant="h6">
                {task}
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton onClick={() => deleteTask(task)} aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
}
export default TodoList;
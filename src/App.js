import React, { useState, useEffect } from 'react';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import { AddTodo } from './MyComponents/AddTodo';

function App() {
  const initTodo = localStorage.getItem('todos')
    ? JSON.parse(localStorage.getItem('todos'))
    : [];

  const [todos, setTodos] = useState(initTodo);

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => e !== todo));
  };

  const formatTime12Hour = (time24) => {
    const [hours, minutes] = time24.split(":").map(Number);
    const suffix = hours >= 12 ? "PM" : "AM";
    const hours12 = hours % 12 || 12; // Convert 0 or 24 to 12 for 12-hour clock
    return `${hours12}:${minutes.toString().padStart(2, "0")} ${suffix}`;
  };
  
  const addTodo = (title, desc, startTime, endTime) => {
    console.log("Adding Todo:", { title, desc, startTime, endTime });
    let sno = todos.length > 0 ? todos[todos.length - 1].sno + 1 : 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
      startTime: formatTime12Hour(startTime),
      endTime: formatTime12Hour(endTime),
      date: new Date().toLocaleString(),
    };
    setTodos([...todos, myTodo]);
  };
  

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Header title="My Todos List" />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;

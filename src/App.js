import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Form from './Form';
import Input from './Input';
import SubmitButton from './SubmitButton';
import ToDoContainer from './ToDoContainer';
import FilterButton from './FilterButton';
import FilterBar from './FilterBar';

function App() {
  const [ToDos, setToDos] = useState(
    JSON.parse(localStorage.getItem('ToDos')) || []
  );
  const 

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const newToDo = { 
      {"text": form.newToDo.value},
      {"isComplete": false}
    };
    setToDos([...ToDos, newToDo]);
    localStorage.setItem('ToDos', JSON.stringify([...ToDos, newToDo]));
  }

  return (
    <>
      <Header>To-Do-App</Header>

      <Form onSubmit={handleSubmit}>
        <Input name="newToDo" />
        <SubmitButton>Submit ToDo</SubmitButton>
      </Form>

      <ToDoContainer>
        {ToDos.map(toDo => (
          <li>{toDo}</li>
        ))}
      </ToDoContainer>

      <FilterBar>
        <FilterButton>all</FilterButton>
        <FilterButton>complete</FilterButton>
        <FilterButton>active</FilterButton>
      </FilterBar>
    </>
  );
}

export default App;

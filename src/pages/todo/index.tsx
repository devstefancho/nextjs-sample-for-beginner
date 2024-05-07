import axios from 'axios';
import { NextPage } from 'next';
import { useState } from 'react';
import { TodoResponseDto } from '@client/interfaces/todo';
import Todo from '@client/components/Todo';

const Index: NextPage = () => {
  const [todo, setTodo] = useState<TodoResponseDto>();
  const handleButtonClick = async () => {
    const data = await axios.get<TodoResponseDto>(
      'https://jsonplaceholder.typicode.com/todos/1',
    );

    setTodo(data.data);
  };

  return (
    <>
      <h1>Hello World</h1>
      <button onClick={handleButtonClick}>Get Data</button>
      {todo && (
        <>
          <div>Id : {todo.id}</div>
          <div>Title : {todo.title}</div>
          <div>UserId : {todo.userId}</div>
          <div>Completed : {todo.completed}</div>
        </>
      )}

      {todo && <Todo id={todo.id} title={todo.title} />}
    </>
  );
};

export default Index;

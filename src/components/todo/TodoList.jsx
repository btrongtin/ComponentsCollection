import { useState } from 'react';
import TodoItem from './TodoItem';
import AddTodoForm from './AddTodoForm';

export const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: '1', description: 'Pick up kids from school', isCompleted: false },
    { id: '2', description: 'Prepare for presentation', isCompleted: false },
    { id: '3', description: 'Meeting with Alisa', isCompleted: false },
  ]);

  const addNewTodo = (todo) => {
    setTodos([
      ...todos,
      { id: Date.now().toString(), description: todo, isCompleted: false },
    ]);
  };

  return (
    <>
      <h2 className='text-[#343a40] font-medium text-lg mb-4'>Todo List</h2>
      <AddTodoForm addNewTodo={addNewTodo} />

      <div className='list-wrapper'>
        <ul>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      </div>
    </>
  );
};

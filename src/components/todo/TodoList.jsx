import { useState } from 'react';
import TodoItem from './TodoItem';
import AddTodoForm from './AddTodoForm';

export const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: '1', description: 'Pick up kids from school', isCompleted: false },
    { id: '2', description: 'Prepare for presentation', isCompleted: true },
    { id: '3', description: 'Meeting with Alisa', isCompleted: false },
  ]);

  const addNewTodo = (todo) => {
    setTodos([
      ...todos,
      { id: Date.now().toString(), description: todo, isCompleted: false },
    ]);
  };

  const toggleTodoStatus = (todoId) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const removeTodo = (todoId) => {
    const newTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
  };

  return (
    <>
      <h2 className='text-[#343a40] font-medium text-lg mb-4'>Todo List</h2>
      <AddTodoForm addNewTodo={addNewTodo} />

      <div className='list-wrapper'>
        <ul>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodoStatus={toggleTodoStatus}
              removeTodo={removeTodo}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

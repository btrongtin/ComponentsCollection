import { useState } from 'react';

const AddTodoForm = ({ addNewTodo }) => {
  const [newTodo, setNewTodo] = useState('');
  const handleTodoChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddNewTodo = (e) => {
    e.preventDefault();

    if (newTodo) {
      addNewTodo(newTodo);
      setNewTodo('');
    }
  };

  return (
    <form className='flex items-center mb-4'>
      <input
        type='text'
        placeholder='(^_^) What do you need to do today?'
        className='input border border-solid border-[#ebedf2] w-full text-sm rounded-none'
        value={newTodo}
        onChange={handleTodoChange}
      />
      <button
        className='btn btn-primary ml-2 text-[#fff] bg-gradient-to-tr from-[#da8cff] to-[#9a55ff] px-10 py-2 rounded-none hover:opacity-80'
        onClick={handleAddNewTodo}
      >
        Add
      </button>
    </form>
  );
};

export default AddTodoForm;

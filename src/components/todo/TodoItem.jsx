import { CiCircleRemove } from 'react-icons/ci';

const TodoItem = ({ todo, toggleTodoStatus, removeTodo }) => {
  return (
    <li className='flex items-center mb-2 py-2'>
      <input
        type='checkbox'
        className='checkbox checkbox-sm checkbox-primary [--chkfg:white] mr-3 rounded-none'
        defaultChecked={todo.isCompleted}
        onChange={() => toggleTodoStatus(todo.id)}
        id={`todoCheckbox-${todo.id}`}
      />
      <label
        htmlFor={`todoCheckbox-${todo.id}`}
        className={`text-[#343a40] text-sm font-normal ${
          todo.isCompleted ? 'line-through' : ''
        }`}
      >
        {todo.description}
      </label>
      <span
        className='ml-auto text-2xl cursor-pointer text-[rgb(214,35,35)] font-bold'
        onClick={() => removeTodo(todo.id)}
      >
        <CiCircleRemove />
      </span>
    </li>
  );
};

export default TodoItem;

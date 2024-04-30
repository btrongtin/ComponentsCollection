import { CiCircleRemove } from 'react-icons/ci';

const TodoItem = ({ todo }) => {
  return (
    <li className='flex items-center mb-2 py-2'>
      <input
        type='checkbox'
        className='checkbox checkbox-sm checkbox-primary [--chkfg:white] mr-3 rounded-none'
        // checked={todo.isCompleted}
      />
      <span className='text-[#343a40] text-sm font-normal'>
        {todo.description}
      </span>
      <span className='ml-auto text-2xl cursor-pointer text-sideNavChildColor font-bold'>
        <CiCircleRemove />
      </span>
    </li>
  );
};

export default TodoItem;

import React, { Fragment } from 'react';
import {
  HiOutlineBell,
  HiOutlineSearch,
  HiOutlineChatAlt,
} from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className='navbar bg-base-100'>
      <div className='flex-none'>
        <button className='btn btn-square btn-ghost'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            className='inline-block w-5 h-5 stroke-current'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            ></path>
          </svg>
        </button>
      </div>
      <div className='flex-1'>
        {/* <a className='btn btn-ghost text-xl'>daisyUI</a> */}
      </div>
      <div className='flex-none gap-2'>
        <div className='form-control'>
          <input
            type='text'
            placeholder='Search'
            className='input w-24 md:w-auto'
          />
        </div>
        <div className='dropdown dropdown-end'>
          <div
            tabIndex={0}
            role='button'
            className='btn btn-ghost btn-circle avatar'
          >
            <div className='w-10 rounded-full'>
              <img
                alt='Tailwind CSS Navbar component'
                src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52'
          >
            <li>
              <a className='justify-between'>
                Profile
                <span className='badge'>New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

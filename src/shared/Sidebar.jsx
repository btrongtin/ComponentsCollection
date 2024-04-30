import React, { useState } from 'react';
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { PiStack } from 'react-icons/pi';
import { HiOutlineLogout, HiOutlineViewGrid } from 'react-icons/hi';
import {
  DASHBOARD_SIDEBAR_LINKS,
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
} from '../constant';

const linkClass =
  'flex items-center gap-2 py-3 hover:text-primary rounded-sm text-[.875rem] transition';

export default function Sidebar() {
  return (
    <div className='bg-white w-60 flex flex-col p-[2.25rem]'>
      <div className='flex items-center gap-2 py-3'>
        <PiStack size={20} color='#b66dff' />
        <span className='text-sideNavColor font-bold text-lg'>
          React Collections
        </span>
      </div>
      <div className='py-8 flex flex-1 flex-col gap-0.5'>
        {/* {DASHBOARD_SIDEBAR_LINKS.map((link) => (
          <SidebarLink key={link.key} link={link} />
        ))} */}
        <SidebarLink
          link={{ label: 'Dashboard', path: '/', icon: <HiOutlineViewGrid /> }}
        />
        <div
          id='sidebarCollapse'
          className='collapse collapse-arrow bg-base-200 transition-none'
        >
          <input type='checkbox' />
          <div className='collapse-title flex p-0'>
            <div className='flex items-center justify-between w-full gap-2'>
              <span className={`text-[.875rem] text-sideNavColor`}>
                Components
              </span>
              <HiOutlineViewGrid />
            </div>
          </div>
          <div className='collapse-content'>
            {DASHBOARD_SIDEBAR_LINKS[0].children.map((link) => (
              <SidebarChildren key={link.key} link={link} />
            ))}
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-0.5 pt-2 border-t border-neutral-700'>
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
          <SidebarLink key={link.key} link={link} />
        ))}
        <div className={classNames(linkClass, 'cursor-pointer text-red-500')}>
          <span className='text-xl'>
            <HiOutlineLogout />
          </span>
          Logout
        </div>
      </div>
    </div>
  );
}

function SidebarLink({ link }) {
  const { pathname } = useLocation();
  return (
    <Link
      to={link.path}
      className={classNames(
        pathname === link.path ? 'text-primary' : 'text-sideNavParentColor',
        linkClass,
        'flex items-center justify-between'
      )}
    >
      {link.label}
      <span className='text-base'>{link.icon}</span>
    </Link>
  );
}

function SidebarChildren({ link }) {
  const { pathname } = useLocation();
  return (
    <Link
      to={link.path}
      className={classNames(
        pathname === link.path ? 'text-primary' : 'text-sideNavChildColor',
        linkClass,
        'text-[13px] hover:text-[#555]'
      )}
    >
      <span className='text-xs mr-4'>{link.icon}</span>
      <span>{link.label}</span>
    </Link>
  );
}

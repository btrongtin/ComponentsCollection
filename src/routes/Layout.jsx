import { Outlet, Link } from 'react-router-dom';
import Sidebar from '../shared/Sidebar';
import Header from '../shared/Header';

export default function Layout() {
  return (
    <>
      <div className='h-screen w-screen overflow-hidden flex flex-row'>
        <Sidebar />
        <div className='flex flex-col flex-1'>
          <Header />
          <div className='flex-1 p-10 min-h-0 overflow-auto bg-[#F2EDF3]'>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

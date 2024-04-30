import {
  HiOutlineViewGrid,
  HiOutlineQuestionMarkCircle,
  HiOutlineCog,
} from 'react-icons/hi';
import { FaArrowRight } from 'react-icons/fa6';

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: 'components',
    label: 'Components',
    icon: <HiOutlineViewGrid />,
    children: [
      {
        key: 'tab',
        label: 'Tab',
        path: '/components/tab',
        icon: <FaArrowRight />,
      },
      {
        key: 'todo',
        label: 'Todo',
        path: '/components/todo',
        icon: <FaArrowRight />,
      },
      {
        key: 'carousel',
        label: 'Carousel',
        path: '/components/carousel',
        icon: <FaArrowRight />,
      },
      {
        key: 'customers',
        label: 'Customers',
        path: '/customers',
        icon: <FaArrowRight />,
      },
      {
        key: 'transactions',
        label: 'Transactions',
        path: '/transactions',
        icon: <FaArrowRight />,
      },
      {
        key: 'messages',
        label: 'Messages',
        path: '/messages',
        icon: <FaArrowRight />,
      },
    ],
  },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: 'settings',
    label: 'Settings',
    path: '/settings',
    icon: <HiOutlineCog />,
  },
  {
    key: 'support',
    label: 'Help & Support',
    path: '/support',
    icon: <HiOutlineQuestionMarkCircle />,
  },
];

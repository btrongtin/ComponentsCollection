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
        key: 'imagesGallery',
        label: 'Images Gallery',
        path: '/components/imagesgallery',
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

const galleryImagesNames = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
];
export const IMAGES_GALLERY_DATA = galleryImagesNames.map((item) => ({
  id: item,
  src: `/assets/images/gallery/${item}.jpg`,
}));

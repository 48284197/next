import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

type NavType = {
  url: string;
  label: string;
};

const BaseNav = () => {
  const navs: Array<NavType> = [
    {
      url: '/',
      label: 'Home',
    },
    {
      url: '/about',
      label: 'About1',
    },
  ];
  const [open, setopen] = useState(false);
  const router = useRouter();
  return (
    <>
      <div
        className={`fixed top-0 z-50 grid w-full items-center justify-between rounded-b-xl bg-gray-800/80 px-8 py-2 text-white backdrop-blur-sm md:flex lg:flex xl:flex`}
      >
        <h1 className="text-2xl font-bold">My App</h1>
        <nav
          className={`grid max-h-0 gap-x-4 overflow-hidden font-bold text-white  transition-all duration-300   md:flex md:max-h-fit lg:flex lg:max-h-fit xl:flex xl:max-h-fit ${open ? `max-h-20` : ''}`}
        >
          {navs.map((e) => (
            <Link
              href={e.url}
              key={e.url}
              className={`cursor-pointer hover:text-blue-500 ${router.asPath === e.url ? 'text-blue-500' : ''}`}
            >
              {e.label}
            </Link>
          ))}
        </nav>
        <div
          className={`absolute right-8 top-4  md:hidden lg:hidden xl:hidden `}
        >
          <div
            className=" grid  cursor-pointer gap-1 rounded-md text-white"
            onClick={() => setopen(!open)}
          >
            <div
              className={`h-1 w-6 origin-right rounded-full bg-white transition-all  duration-300 ${open ? 'open-menu-top' : ''}`}
            ></div>
            <div
              className={`h-1 w-6 origin-right rounded-full bg-white transition-all  duration-300 ${open ? 'opacity-0' : ''}`}
            ></div>
            <div
              className={`h-1 w-6 origin-right rounded-full bg-white transition-all  duration-300 ${open ? 'open-menu-btm' : ''}`}
            ></div>
          </div>
        </div>
      </div>
      <div className="h-12"></div>
    </>
  );
};

export { BaseNav };

'use client'

import {  usePathname } from 'next/navigation'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react';
import {
  // ArrowPathIcon,
  // ChartPieIcon,
  ChevronDownIcon,
  // CursorArrowRaysIcon,
  // FingerPrintIcon,
  // PhoneIcon,
  // PlayCircleIcon,
  // SquaresPlusIcon,
} from '@heroicons/react/20/solid';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import type {  Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';

import {  useState } from 'react';
import useSystemStore from '@/store/system';

type MenuItem = {
  name: string;
  href?: Url;
  subMenu?: {
    name: string;
    description: string;
    href: string;
    icon: any;
  }[];
  footer?: {
    name: string;
    href: string;
    icon: any;
  }[];
};

const menu: Array<MenuItem> = [
  // {
  //   name: '控制台',
  //   href: '/dashboard',
  // },
  // {
  //   name: '文章',
  //   href: '/articles',
  // },
  // {
  //   name: '联系我',
  //   href: '/call',
  // },
];
const login: MenuItem = {
  name: '登录',
  href: '',
}

function CenterNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathName = usePathname()
  const sytemStore = useSystemStore()


  return (
    <header className="bg-white/30 ">
      <nav
        aria-label="Global"
        className="mx-auto flex items-center justify-between px-6 py-8  lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className={`-m-1.5 p-1.5 font-bold text-2xl ${pathName === '/' ? 'gradient-word' : ''}`}>
            XUXIWEII
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >

            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          {menu.map((item) =>
            item?.subMenu || item?.footer ? (
              <Popover
                className="relative"
                key={item.name}
                x-data="{ open: true }"
              >
                <PopoverButton className="brotherHover  flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                  {item.name}
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="size-5 flex-none text-gray-400"
                  />
                </PopoverButton>

                <PopoverPanel
                  className={` absolute -left-8 top-2/3 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in`}
                >
                  <div className="p-4">
                    {item.subMenu &&
                      item.subMenu.map((items) => (
                        <div
                          key={items.name}
                          className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                        >
                          <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            <items.icon className="size-6 text-gray-600 group-hover:text-indigo-600" />
                          </div>
                          <div className="flex  flex-1 flex-col items-start">
                            <Link
                              href={items.href}
                              className="block font-semibold text-gray-900"
                            >
                              {items.name}

                              <span className="absolute inset-0" />
                            </Link>
                            <p className="mt-1 text-gray-600">
                              {items.description}
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                    {item.footer &&
                      item.footer.map((items) => (
                        <Link
                          key={items.name}
                          href={items.href}
                          className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                        >
                          <items.icon
                            aria-hidden="true"
                            className="size-5 flex-none text-gray-400"
                          />
                          {items.name}
                        </Link>
                      ))}
                  </div>
                </PopoverPanel>
              </Popover>
            ) : (
              item.href && (
                <Link
                  href={item.href}
                  key={item.name}
                  className={` text-sm font-semibold leading-6 text-gray-900 ${pathName.includes(item.href as string) ? 'gradient-word' : ''}`}

                >
                  {item.name}
                </Link>
              )
            ),
          )}
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {
            sytemStore.userInfo.name ?
              <div>{sytemStore.userInfo.name}</div>
              :
              <Link
                href={login.href as string}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {login.name} <span aria-hidden="true">&rarr;</span>
              </Link>
          }
        </div>
      </nav>
      {/* 移动端 */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="transition lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5 gradient-word text-2xl font-semibold leading-6">
              XUXIWEII
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {menu.map((e) => {
                  return e.subMenu ? (
                    <Disclosure as="div" key={e.name} className="-mx-3">
                      <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        {e.name}
                        <ChevronDownIcon
                          aria-hidden="true"
                          className="size-5 flex-none group-data-[open]:rotate-180"
                        />
                      </DisclosureButton>

                      <DisclosurePanel className="mt-2 space-y-2">
                        {e.footer &&
                          [...e.subMenu, ...e.footer].map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            >
                              {item.name}
                            </Link>
                          ))}
                      </DisclosurePanel>
                    </Disclosure>
                  ) : (
                    e.href && (
                      <Link
                        href={e.href}
                        key={e.name}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {e.name}
                      </Link>
                    )
                  );
                })}
              </div>
              <div className="py-6">
                <Link
                  href={login.href as string}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {login.name}
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

export default CenterNav
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import {Link as LinkRouter} from 'react-router-dom';



const navigation = [
  { name: "Home", to: "/", current: false },
  { name: "Cities", to: "/cities", current: false },
  ,
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="sticky h-24 bg-amber-500"
    >
      {({ open }) => (
        <>
          <div className="">
            <div className="flex items-center justify-between h-16">
              <div className="items-center sm:hidden">


                {/* Mobile menu button*/}
               
                <Disclosure.Button className="inline-flex items-center justify-center text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  {/* <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block w-8 h-6" aria-hidden="true" />) : 
                    (
                    <MenuIcon className="block w-8 h-6" aria-hidden="true" /> )  
                     } */}
                </Disclosure.Button> 
                
              </div>
              <div className="flex flex-row sm:items-stretch sm:justify-start lg:justify-center">
              
                 <img
                    className="h-12 sm:w-14"
                    src="https://imge.cloud/images/2022/06/07/rK78kr.png"
                    alt="faraon"
                  />
                 
              
                <div className="">
                  
                    {navigation.map((item) => (
                     <LinkRouter to={item.to}  key={item.name} 
                       className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-900 hover:bg-gray-700 hover:text-white",
                          " rounded-md sm:px-2 py-2 px-1 sm:font-small"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                    
                      </LinkRouter>
                    ))}
                  
                </div>
              </div>
              <div className="right-0 sm:static sm:pr-0">

                
                {/* Profile dropdown */}
                <Menu as="div" className="relative ">
                  <div>
                    <Menu.Button className="flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="w-8 h-8 rounded-full"
                        src="https://w7.pngwing.com/pngs/789/888/png-transparent-computer-icons-login-person-user-avatar-log-smiley-desktop-wallpaper-sign.png"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 w-48 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            LogOut
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pb-3 space-y-1 x bg-amber-500">
              {navigation.map((item) => (
                <LinkRouter to={item.to}  key={item.name}>
                <Disclosure.Button
                  as="a"
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-black hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
                </LinkRouter>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

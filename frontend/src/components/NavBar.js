import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
// import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link as LinkRouter } from 'react-router-dom';



const navigation = [
  { name: "Home", to: "/", current: false },
  { name: "Cities", to: "/cities", current: false },
  ,
];

 const register = [
  { name: "Sign In", to: "/SignIn"},
  { name: "Sign Up", to: "/SignUp" }
 ];


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (

      
      <Disclosure as="nav" className="h-24 btn-nav">
          
          
        {navigation.map((item) => (
          <LinkRouter to={item.to} key={item.name}
            className={classNames(
              item.current
                ? "bg-gray-900 text-white"
                : "text-white hover:bg-gray-900 hover:text-white", " rounded-md m-4  p-2 sm:font-small font-medium"
            )} aria-current={item.current ? "page" : undefined}> {item.name}
            
          </LinkRouter>
      
        ))}


      {/* Profile dropdown */}
          <Menu as="div" className="">
            <div className="user">
              <Menu.Button className="text-sm rounded-full focus:outline-none focus:ring-offset-2 focus:ring-white">
               
              <img className="h-8 mt-5 mr-5 rounded-full w-9" src="https://w7.pngwing.com/pngs/789/888/png-transparent-computer-icons-login-person-user-avatar-log-smiley-desktop-wallpaper-sign.png" alt="" />
              </Menu.Button>
              
            </div>
          
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95">

   <Menu.Items className="absolute right-0 w-48 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <Menu.Item >
           {({ active }) => (
           <LinkRouter to="/SignIn">
              <a className={classNames(
                active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700")}>
                Sign In
               </a> </LinkRouter>)}
                  </Menu.Item>
        <Menu.Item>
            {({ active }) => (
            <LinkRouter to="/SignUp">
              <a className={classNames(
              active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700")}>
              Sign Up</a> </LinkRouter>)}
                </Menu.Item> 
   </Menu.Items>
</Transition>
  </Menu>
    



        <Disclosure.Panel className="sm:hidden">
          <div className="px-2 pb-3 space-y-1 x bg-amber-500">
            {navigation.map((item) => (
              <LinkRouter to={item.to} key={item.name}>
                <Disclosure.Button as="a"
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-black hover:bg-gray-700 hover:text-white", "block px-3 py-2 rounded-md text-base font-medium")}
                  aria-current={item.current ? "page" : undefined}> {item.name}
                </Disclosure.Button>
              </LinkRouter>
            ))}
          </div>
        </Disclosure.Panel>


      </Disclosure>
      );
}

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";

import { Link as LinkRouter } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import userActions from "../actions/userActions";





const navigation = [
  { name: "Home", to: "/", current: false },
  { name: "Cities", to: "/cities", current: false },
  ,
];




function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {

  const dispatch = useDispatch()
  const user = useSelector(store => store.usersReducers.user)

  function handleClick() {
    dispatch(userActions.logOutUser())
  }



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



      <Menu as="div" className="">
        <div className="user">
          <Menu.Button className="text-sm rounded-full ">
    { !user ? (<img className=" w-14   mt-5 mr-5 rounded-full h-15" src="https://w7.pngwing.com/pngs/789/888/png-transparent-computer-icons-login-person-user-avatar-log-smiley-desktop-wallpaper-sign.png" alt="" />
    ) :  (<img className="w-14 mt-5 mr-5 rounded-full h-15" src={user.imageUser} alt="" />)

    } 
            
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
          {user ? 
           


    <Menu.Items className="absolute right-0 w-48 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item> 
                
                {({ active }) => (
                  
                  <LinkRouter  
                    onClick={handleClick}
                    to="/"
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700"
                    )}
                  >
                    
                    Logout
                  </LinkRouter>
                )}
              </Menu.Item>
            </Menu.Items>
                      :
            <Menu.Items className="absolute right-0 w-48 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">

              <Menu.Item >
                {({ active }) => (
                  <LinkRouter to="/SignIn"
                    className={classNames(
                      active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700")}>
                    Sign In
                  </LinkRouter>)}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <LinkRouter to="/SignUp"
                    className={classNames(
                      active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700")}>
                    Sign Up </LinkRouter>)}
              </Menu.Item>
            </Menu.Items>}
            
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

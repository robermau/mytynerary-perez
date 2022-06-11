
import { Disclosure } from "@headlessui/react";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsTwitch } from "react-icons/bs";
import {Link as LinkRouter} from 'react-router-dom';

const navigation = [
    { name: "Home", to: "/", current: false },
    { name: "Cities", to: "/cities", current: false },
    ,
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Footer() {
    return (

        <Disclosure
            as="footer"
            className="footer" >
            
          
           

                <div className="icon">
                    <BsFacebook />
                    <BsInstagram />
                    <BsTwitter />
                    <BsTwitch />
                </div>
            
           
                {navigation.map((item) => (
                     <LinkRouter to={item.to}  key={item.name}
                   
                       as="a"
                    className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-white  hover:bg-gray-900 hover:text-white",
                          "   rounded-md font-medium "
                        )}
                        aria-current={item.current ? "page" : undefined}
                        >
                        {item.name}
                      
                    </LinkRouter>
                    
                ))}
         
            <p className="footertext"> © All rights reserved</p>

        </Disclosure>
    );
}

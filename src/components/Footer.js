
import { Disclosure } from "@headlessui/react";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsTwitch } from "react-icons/bs";


const navigation = [
    { name: "Home", href: "#", current: false },
    { name: "Cities", href: "#", current: false },
    ,
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Footer() {
    return (

        <Disclosure
            as="footer"
            className="flex justify-around h-24" >
            <div>

                <div className="icon">
                    <BsFacebook />
                    <BsInstagram />
                    <BsTwitter />
                    <BsTwitch />
                </div>
            </div>
           
            <div className="">
                {navigation.map((item) => (
                    <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={classNames(
                            item.current
                                ? "bg-gray-900 text-white"
                                : "text-white  hover:bg-gray-900 hover:text-white",
                            "px-3 py-2 rounded-md text-base font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                    >
                        {item.name}
                    </Disclosure.Button>
                ))}
            </div>
            <p className="footertext"> © Todos los Derechos Reservados</p>

        </Disclosure>
    );
}

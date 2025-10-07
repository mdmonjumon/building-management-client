import React, { useState } from 'react';
import { CgMenuGridR, CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import NavigationLink from './NavigationLink';
import { FaHome } from 'react-icons/fa';
import logo from '../../assets/logo.png'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='bg-[#9ba2ac8f]'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    {/* dropdown menu */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <CgMenuGridR size={35} />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <NavigationLink label="Home" address="/" ></NavigationLink>
                            </li>
                            <li>
                                <NavigationLink label="Apartment" address="/apartment"></NavigationLink>
                            </li>
                        </ul>
                    </div>
                    <div className='flex justify-center items-center ml-3 lg:ml-16'>
                        <img className='w-16 h-16 size-full object-cover hidden lg:flex' src={logo} alt="" />
                        <Link className="btn btn-ghost text-xl">Building Management</Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-5">
                        <li>
                            <NavigationLink label="Home" address="/" icon={FaHome}></NavigationLink>
                        </li>
                        <li>
                            <NavigationLink label="Apartment" address="/apartment"></NavigationLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end relative">
                    <button
                    onClick={()=>setOpen(!open)}
                    >
                        <Link>
                            <CgProfile size={40} />
                        </Link>
                    </button>
                    <div className={`${open?"":"hidden"} flex flex-col gap-2 bg-white p-5 shadow rounded absolute top-15 lg:-right-9`}>
                        <span>{"name"}</span>
                        <span>{"dashboard"}</span>
                        <span>{"logout"}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
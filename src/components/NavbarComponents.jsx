import React from "react";
import {
    Collapse,
    Typography,
    IconButton,
    Avatar,
    Navbar,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import '../components/Navbar.css'
import { useState } from "react";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModalComponent";
import CartPage from "../pages/cart_page/CartPage";
// import { DarkModeSwitch } from "react-toggle-dark-mode";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


function NavList() {
    const [isLoginModalOpen, setLoginModalOpen] = useState(false);

    const openLoginModal = () => {
        setLoginModalOpen(true);
    };

    const closeLoginModal = () => {
        setLoginModalOpen(false);
    };
    return (
        <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium pl-2"
            >
                <Link to={{}} className="flex items-center hover:text-blue-500 transition-colors duration-300 text-white" id="liHome">
                    Home
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium pl-2"
            >
                <Link href="#" className="flex items-center hover:text-blue-500 transition-colors duration-300 text-white">
                    Services
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium pl-2"
            >
                <Link to='#aboutSec' className="flex items-center hover:text-blue-500 transition-colors duration-300 text-white">
                    About Us
                </Link>
            </Typography>
            <button className="bg-blue-700 hover:bg-blue-800 transition-colors text-white px-4 py-1 rounded-md mr-32 duration-300" id="startBtn" onClick={setLoginModalOpen}>
                Sign In
            </button>
            <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
        </ul>
    );
}

export function NavbarSimple() {
    const [openNav, setOpenNav] = React.useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false);


    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener("resize", handleWindowResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleToggleNav = () => {
        setOpenNav(!openNav);
    };

    const handleScroll = () => {
        if (window.scrollY > 50) {
            React.setScrolled(true);
        } else {
            React.setScrolled(false);
        }
    };


    return (
        <>
            <navbar
                className={`w-full mx-auto px-4 py-4 rounded-none border-none shadow-none transition-all ${scrolled ? 'bg-gray-900' : 'bg-transparent'
                    }`}
                id="lpNavbar"
            >
                <div className="flex items-center justify-between text-gray-90">
                    <div className="logo">
                        <Link to={{}}>
                            <img src="/assets/logo2.png" className="w-28 h-12 ms-32" alt="" />
                        </Link>
                    </div>
                    <div className="hidden lg:block">
                        <NavList />
                    </div>
                    <IconButton
                        variant="text"
                        className="mr-14 h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden text-white"
                        ripple={false}
                        onClick={handleToggleNav}
                    >
                        {openNav ? (
                            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                        ) : (
                            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                        )}
                    </IconButton>
                </div>
                <Collapse open={openNav}>
                    <NavList />
                </Collapse>
            </navbar>
        </>
    );
}



export function AvatarDefault() {
    return <Avatar src="/assets/profile-circle.png" alt="avatar" />;
}





// https://docs.material-tailwind.com/img/face-2.jpg

export function DashboardNavbar2() {
    const [openNav, setOpenNav] = React.useState(false);

    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false);


    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleToggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Logika pencarian atau tindakan lainnya dapat ditambahkan di sini
    };

    const [isDarkMode, setDarkMode] = React.useState(false);

    const toggleDarkMode = (checked) => {
        setDarkMode(checked);
    };

    const defaultProperties = {
        dark: {
            circle: {
                r: 9,
            },
            mask: {
                cx: '50%',
                cy: '23%',
            },
            svg: {
                transform: 'rotate(40deg)',
            },
            lines: {
                opacity: 0,
            },
        },
        light: {
            circle: {
                r: 5,
            },
            mask: {
                cx: '100%',
                cy: '0%',
            },
            svg: {
                transform: 'rotate(90deg)',
            },
            lines: {
                opacity: 1,
            },

        },
        springConfig: { mass: 4, tension: 250, friction: 35 },
    };

    const getBackgroundColor = () => {
        return isDarkMode ? '#232323' : '#fff';
    };

    return (
        <>

            <div className="col-span-3 w-full flex h-20" id="navbar2">
                <div className="pt-3">
                    <a href="#">
                        <img src="/assets/logo2.png" className="w-28 h-12 ml-32" alt="" id='logo' />
                    </a>
                </div>
                {/* <DarkModeSwitch
                    checked={isDarkMode}
                    onChange={toggleDarkMode}
                    size={25}
                    style={{ position: 'absolute', right: '200px', top: '30px' }}
                /> */}
                {/* <Link to='/cart'> */}
                {/* <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Shopping_Cart_01"> <path id="Vector" d="M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM17 17H9.29395C8.83288 17 8.60193 17 8.41211 16.918C8.24466 16.8456 8.09938 16.7291 7.99354 16.5805C7.8749 16.414 7.82719 16.1913 7.73274 15.7505L5.27148 4.26465C5.17484 3.81363 5.12587 3.58838 5.00586 3.41992C4.90002 3.27135 4.75477 3.15441 4.58732 3.08205C4.39746 3 4.16779 3 3.70653 3H3M6 6H18.8732C19.595 6 19.9555 6 20.1978 6.15036C20.41 6.28206 20.5653 6.48862 20.633 6.729C20.7104 7.00343 20.611 7.34996 20.411 8.04346L19.0264 12.8435C18.9068 13.2581 18.8469 13.465 18.7256 13.6189C18.6185 13.7547 18.4772 13.861 18.317 13.9263C18.1361 14 17.9211 14 17.4921 14H7.73047M8 21C6.89543 21 6 20.1046 6 19C6 17.8954 6.89543 17 8 17C9.10457 17 10 17.8954 10 19C10 20.1046 9.10457 21 8 21Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className=" w-4 h-4"></path> </g> </g></svg> */}
                {/* </Link> */}

                <div className="mx-auto pt-5" id="form">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="search" className="mb-2 text-sm font-medium text-white sr-only dark:text-white">
                            Search
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-white dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                            </div>
                            <div className="input mr-8">
                                <input
                                    type="search"
                                    id="search"
                                    className="block w-[250px] p-2 ps-10 text-sm text-white border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 bg-transparent"
                                    placeholder="Search"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="text-white absolute end-[1px] bottom-[0.8px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-8"
                                >
                                    Search
                                </button>

                            </div>
                        </div>
                    </form>
                </div>
                <div className=" mr-32 pt-4" id="avatarBox">
                    <div className="z-50 relative">
                        <button
                            type="button"
                            className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                            id="user-menu-button"
                            aria-expanded={isDropdownOpen}
                            onClick={handleToggleDropdown}
                            data-dropdown-toggle="user-dropdown"
                            data-dropdown-placement="bottom"
                        >
                            <span className="sr-only">Open user menu</span>
                            {/* <img className="w-10 h-10 rounded-full" src="/public/assets/profile.webp" alt="user photo" /> */}
                            <AvatarDefault />
                        </button>
                        {/* Dropdown menu */}
                        {isDropdownOpen && (
                            <div
                                className="absolute mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 w-[170px]"
                                id="user-dropdown"
                            >
                                <div className="px-4 py-3" id='dropdown'>
                                    <span className="block text-sm text-gray-900 dark:text-white">Nama User</span>
                                    <span className="block text-sm text-gray-500 truncate dark:text-gray-400">Email User</span>
                                </div>
                                <ul className="py-2" aria-labelledby="user-menu-button">
                                    {/* <li>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                        >
                                            Dashboard
                                        </a>
                                    </li> */}
                                    <li>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                        >
                                            Settings
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                        >
                                            Order
                                        </a>
                                    </li>
                                    <li>
                                        <Link
                                            to='/home'
                                            className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                        >
                                            Sign out
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>

                </div>
                <div>
                </div>
            </div>


        </>
    );
}

export function CartNavbar() {
    const [openNav, setOpenNav] = React.useState(false);

    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false);


    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleToggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const [isDarkMode, setDarkMode] = React.useState(false);

    const toggleDarkMode = (checked) => {
        setDarkMode(checked);
    };

    const defaultProperties = {
        dark: {
            circle: {
                r: 9,
            },
            mask: {
                cx: '50%',
                cy: '23%',
            },
            svg: {
                transform: 'rotate(40deg)',
            },
            lines: {
                opacity: 0,
            },
        },
        light: {
            circle: {
                r: 5,
            },
            mask: {
                cx: '100%',
                cy: '0%',
            },
            svg: {
                transform: 'rotate(90deg)',
            },
            lines: {
                opacity: 1,
            },

        },
        springConfig: { mass: 4, tension: 250, friction: 35 },
    };

    const getBackgroundColor = () => {
        return isDarkMode ? '#232323' : '#fff';
    };

    return (
        <>

            <div className="col-span-3 w-full flex h-20" id="navbar2">
                <div className="pt-3">
                    <a href="#">
                        <img src="/assets/logo2.png" className="w-28 h-12 ml-32" alt="" id='logo' />
                    </a>
                </div>

                <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ms-auto">
                    <Typography
                        as="li"
                        variant="small"
                        color="blue-gray"
                        className="p-1 font-medium pl-2"
                    >
                        <Link to='/dashboard' className="flex items-center hover:text-blue-500 transition-colors duration-300 text-white" id="liHome">
                            Home
                        </Link>
                    </Typography>
                    <Typography
                        as="li"
                        variant="small"
                        color="blue-gray"
                        className="p-1 font-medium pl-2"
                    >
                        <Link href="#" className="flex items-center hover:text-blue-500 transition-colors duration-300 text-white">
                            Services
                        </Link>
                    </Typography>
                    <Typography
                        as="li"
                        variant="small"
                        color="blue-gray"
                        className="p-1 font-medium pl-2"
                    >
                        <Link to={{}} className="flex items-center hover:text-blue-500 transition-colors duration-300 text-white">
                            About Us
                        </Link>
                    </Typography>
                </ul>

                {/* <DarkModeSwitch
                    checked={isDarkMode}
                    onChange={toggleDarkMode}
                    size={25}
                    style={{ position: 'absolute', right: '200px', top: '30px' }}
                /> */}
                <div className="pt-4 ms-auto mr-32" id="avatarBox">
                    <div className="z-50 relative">
                        <button
                            type="button"
                            className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                            id="user-menu-button"
                            aria-expanded={isDropdownOpen}
                            onClick={handleToggleDropdown}
                            data-dropdown-toggle="user-dropdown"
                            data-dropdown-placement="bottom"
                        >
                            <span className="sr-only">Open user menu</span>
                            {/* <img className="w-10 h-10 rounded-full" src="/public/assets/profile.webp" alt="user photo" /> */}
                            <AvatarDefault />
                        </button>
                        {/* Dropdown menu */}
                        {isDropdownOpen && (
                            <div
                                className="absolute mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 w-[170px]"
                                id="user-dropdown"
                            >
                                <div className="px-4 py-3" id='dropdown'>
                                    <span className="block text-sm text-gray-900 dark:text-white">Nama User</span>
                                    <span className="block text-sm text-gray-500 truncate dark:text-gray-400">Email User</span>
                                </div>
                                <ul className="py-2" aria-labelledby="user-menu-button">
                                    {/* <li>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                        >
                                            Dashboard
                                        </a>
                                    </li> */}
                                    <li>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                        >
                                            Settings
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                        >
                                            Order
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                        >
                                            Sign out
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>

                </div>
                <div>
                </div>
            </div>


        </>
    );
}


/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect, useCallback, useContext } from 'react'
import { ThemeContext } from '../context/ThemeProvider'
import '../assest/style/navbar.css'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, NavLink, useLocation } from 'react-router-dom';
import { TiSocialLinkedin } from "react-icons/ti";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";
import { LuGithub } from "react-icons/lu";
import { FaMoon } from "react-icons/fa6";
import { FaSun } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const navigation = [
    { name: 'Home', href: '/', hash: false, current: false },
    { name: 'About', href: '#about', hash: true, current: false },
    { name: 'Skills', href: '#skills', hash: true, current: false },
    { name: 'Projects', href: '#projects', hash: true, current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const Navbar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)
    const [navbarClass, setNavbarClass] = useState("");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [activeSection, setActiveSection] = useState('/');
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/' && !location.hash) {
            setActiveSection('/')
        }
    }, [location])

    const borderGradient = {
        borderImageSlice: '1',
        borderImageSource: 'linear-gradient(30deg, #6229cf, #cc57fa)'
    }

    // Determine if a nav item is active
    const isItemActive = (item) => {
        if (!item.hash) {
            // For non-hash links, check if path matches and no hash is present
            return location.pathname === item.href && !location.hash
        } else {
            // For hash links, check if the active section matches
            return activeSection === item.href
        }
    }

    const handelScroll = useCallback(() => {
        const currentScrollY = window.scrollY;

        if (currentScrollY === 0) {
            // Back at the top, show the original navbar
            setNavbarClass("");
        } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // Scrolling down
            setNavbarClass("scrolled hide");
        } else {
            // Scrolling up
            setNavbarClass("scrolled show");
        }
        setLastScrollY(currentScrollY);

        // Check which section is currently in view
        // Only check hash-based navigation items
        const hashItems = navigation.filter(item => item.hash);

        for (const item of hashItems) {
            const element = document.querySelector(item.href);
            if (element) {
                const rect = element.getBoundingClientRect();
                // If the element is in the viewport (with some tolerance)
                if (rect.top <= 150 && rect.bottom >= 150) {
                    setActiveSection(item.href);
                    break;
                }
            }
        }
    }, [lastScrollY]);

    useEffect(() => {
        window.addEventListener("scroll", handelScroll);

        return () => {
            window.removeEventListener('scroll', handelScroll)
        }
    }, [handelScroll]);
    
    const homeSection = document.getElementById('home');

    return (
        <Disclosure as="nav" className={`navbar ${navbarClass} bg-transparent mb-0 md:mb-16`}>
            <div className="mx-auto max-w-7xl md:mt-4 px-2 sm:px-4">
                <div className="relative flex h-16 items-center justify-between">
                    {/* Mobile menu button*/}
                    <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                        <DisclosureButton className="group relative cursor-pointer inline-flex items-center justify-center rounded-full p-2 text-mainColor dark:text-white focus:outline-none hover:bg-gray-450/60 dark:hover:bg-dark-200/50">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                        </DisclosureButton>
                        <button
                            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                            className="flex items-center justify-center rounded-full p-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-themColor"
                            onClick={toggleTheme}
                        >
                            {theme === "dark" ? (
                                <div className="flex items-center">
                                    <FaSun className="text-amber-400 text-xl md:text-2xl" />
                                    <span className="ml-2 text-sm text-gray-300 md:hidden">Light Mode</span>
                                </div>
                            ) : (
                                <div className="flex items-center">
                                    <FaMoon className="text-mainColor text-xl md:text-2xl" />
                                    <span className="ml-2 text-sm text-gray-700 md:hidden">Dark Mode</span>
                                </div>
                            )}
                        </button>
                    </div>
                    {/* Logo */}
                    <div className="flex justify-end w-full md:w-auto md:justify-start flex-shrink-0 items-center pt-1 md:pt-0">
                        {theme === "dark" ? (
                            <img
                                alt="abdoassal"
                                src="./images/logo-dark2.png"
                                className="w-56 md:w-60 lg:w-65 h-auto"
                            />
                        ) : (
                            <img
                                alt="abdoassal"
                                src="./images/logo-light.png"
                                className="w-56 md:w-60 lg:w-65 h-auto"
                            />
                        )}
                    </div>
                    {/* Navigation */}
                    <div className="flex flex-1 items-center justify-end me-3 md:items-center md:justify-center">
                        <div className="hidden md:ml-6 md:block">
                            <div className="flex md:space-x-10 space-x-3">
                                {navigation.map((item) => (
                                    item.hash ? (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                isItemActive(item) ? 'text-themColor border-b border-themColor dark:text-white dark:border-white' : 'text-darkColor hover:text-themColor dark:text-white dark:hover:text-gray-200',
                                                'px-0 pt-2 text-md font-medium text-darkColor dark:text-whit dark:hover:text-gray-400 transition-all duration-300',
                                            )}
                                        >
                                            {item.name}
                                        </a>
                                    ) : (
                                        // For non-hash links, use NavLink
                                        <NavLink
                                            key={item.name}
                                            to={item.href}
                                            onClick={() => {
                                                if (item.name === 'Home') {
                                                    homeSection.scrollIntoView({ behavior: 'smooth' });  
                                                }
                                            }}
                                            className={classNames(
                                                isItemActive(item) ? 'text-themColor border-b border-themColor dark:text-white dark:border-white' : 'text-darkColor hover:text-themColor dark:text-white dark:hover:text-gray-200',
                                                'px-0 pt-2 text-md font-medium text-darkColor transition-all duration-300',
                                            )}
                                        >
                                            {item.name}
                                        </NavLink>
                                    )
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Social Icons */}
                    <div className="absolute inset-y-0 right-0 hidden lg:flex items-center gap-3 pr-2 sm:static lg:inset-auto lg:ml-6 lg:pr-0">
                        <Link
                            to="https://www.linkedin.com/in/abdelrahman-assal"
                            className="soial-icons group relative rounded-full text-mainColor bg-icon hover:bg-transparent p-2 text-center hidden md:inline-block focus:outline-none"
                            target='blank'
                        >
                            <span className="absolute -inset-0 scale-0 rounded-full bg-linear-30 from-themColor to-themColor2 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all ease-in-out duration-300" />
                            <TiSocialLinkedin aria-hidden="true" className="h-6 w-6 relative group-hover:text-white transition-all ease-in-out duration-300" />
                        </Link>
                        <Link
                            to="https://github.com/AbdoAssall"
                            className="soial-icons group relative rounded-full text-mainColor bg-icon hover:bg-transparent p-2 text-center hidden md:inline-block focus:outline-none"
                            target='blank'
                        >
                            <span className="absolute -inset-0 scale-0 rounded-full bg-linear-30 from-themColor to-themColor2 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all ease-in-out duration-300" />
                            <IoLogoGithub aria-hidden="true" className="h-6 w-6 relative group-hover:text-white transition-all ease-in-out duration-300" />
                        </Link>
                        <Link
                            to="https://twitter.com/abdoassal83"
                            className="soial-icons group relative rounded-full text-mainColor bg-icon hover:bg-transparent p-2 text-center hidden md:inline-block focus:outline-none"
                            target='blank'
                        >
                            <span className="absolute -inset-0 scale-0 rounded-full  bg-linear-30 from-themColor to-themColor2 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all ease-in-out duration-300" />
                            <IoLogoTwitter aria-hidden="true" className="h-6 w-6 relative group-hover:text-white transition-all ease-in-out duration-300" />
                        </Link>

                        {/* Profile dropdown */}
                        <a
                            href='#contact'
                            className='group relative bg-transparent hidden md:inline-block md:text-lg border-2 px-5 py-2 lg:px-6 lg:py-3 text-center transition-all ease-in-out duration-300'
                            style={borderGradient}
                        >
                            <span className="absolute start-0 top-0 h-full w-0  bg-linear-30 from-themColor to-themColor2 group-hover:w-full transition-all ease-in-out duration-300" />
                            <span className='dark:text-white group-hover:text-white relative transition-all ease-in-out duration-300'>Let's Connect</span>
                        </a>
                    </div>
                    {/* Theme Switcher */}
                    <div className="relative group hidden md:flex items-center justify-center md:pl-3">
                        <button
                            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                            className="w-7 h-7 text-2xl cursor-pointer rounded-full transition-all duration-300 focus:outline-none"
                            onClick={toggleTheme}
                        >
                            {theme === "dark"
                                ? (<FaSun className={`text-amber-400`} />)
                                : (<FaMoon className={`text-mainColor`} />)
                            }
                        </button>
                        <span className="absolute top-9 mt-2 left-3.5 -translate-x-1/2 px-2 py-1 text-xs text-white rounded-md bg-linear-30 from-themColor to-themColor2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg">
                            {theme === "dark" ? "Light Mode" : "Dark Mode"}
                        </span>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            aria-current={isItemActive(item) ? 'page' : undefined}
                            onClick={() => {
                                if (item.name === 'Home') {
                                     homeSection.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                            className={classNames(
                                isItemActive(item) ? 'bg-themColor text-white dark:bg-dark-200/50' : 'text-darkColor focus:bg-icon hover:bg-icon dark:text-white dark:hover:bg-dark-200/50',
                                'block rounded-md px-3 py-2 text-base font-medium',
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                    <div className="mt-3 mb-6">
                        <Link
                            to="https://github.com/AbdoAssall"
                            target="_blank"
                            className={`soial-icons inline-flex gap-2 ${theme === 'dark' ? 'bg-dark-500 hover:bg-dark-200/50' : 'bg-linear-30 from-themColor to-themColor2 hover:opacity-90'} text-white text-lg ml-2 !px-4 py-2 !pt-4 text-center rounded-md`}
                        >
                            <LuGithub className='w-5 h-5' />
                            <span>GitHub</span>
                        </Link>
                        <Link
                            to="https://www.linkedin.com/in/abdelrahman-assal"
                            target="_blank"
                            className={`soial-icons inline-flex gap-2 ${theme === 'dark' ? 'bg-dark-500 hover:bg-dark-200/50' : 'bg-linear-30 from-themColor to-themColor2 hover:opacity-90'} text-white text-lg ml-2 !px-4 py-2 !pt-4 text-center rounded-md`}
                        >
                            <FaLinkedinIn className='w-5 h-5' />
                            <span>LinkedIn</span>
                        </Link>
                    </div>
                    <a
                        href='#contact'
                        className='group block relative bg-transparent sm:text-md md:text-lg border-2 px-5 pb-2 pt-3 !w-full text-center transition-all ease-in-out duration-300'
                        style={borderGradient}
                    >
                        <span className="absolute start-0 top-0 h-full w-0 bg-linear-30 from-themColor to-themColor2 group-focus:w-full group-hover:w-full transition-all ease-in-out duration-300" />
                        <span className='dark:text-white group-focus:text-white group-hover:text-white relative transition-all ease-in-out duration-300'>Let's Connect</span>
                    </a>
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}
export default Navbar;

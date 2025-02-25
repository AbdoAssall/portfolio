/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect, useCallback } from 'react'
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
    const [navbarClass, setNavbarClass] = useState("");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [activeSection, setActiveSection] = useState('/');
    const [theme, setTheme] = useState(() => {
        if (localStorage.theme === "dark" ||
            (!("theme" in localStorage) && darkQuery.matches)
        ) {
            return "dark";
        } else {
            return "light";
        }
    });
    const element = document.documentElement;
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const location = useLocation();

    const toggleDarkMode = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    useEffect(() => {
        if (theme === "dark") {
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme, element]);

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

    // Style for active links
    const getLinksStyle = (item) => {
        const active = isItemActive(item)
        return {
            color: active ? '#6229cf' : 'var(--text-color-dark)',
            borderBottom: active ? 'solid 1px #6229cf' : ''
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

    return (
        <Disclosure as="nav" className={`navbar ${navbarClass} bg-transparent mb-0 md:mb-16`}>
            <div className="mx-auto max-w-7xl md:mt-4 px-2 sm:px-4">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                        {/* Mobile menu button*/}
                        <DisclosureButton className="group relative cursor-pointer inline-flex items-center justify-center rounded-md p-2 text-mainColor focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                        </DisclosureButton>
                    </div>
                    <div className="flex flex-1 items-center justify-end me-3 md:items-stretch md:justify-start">
                        <div className="flex flex-shrink-0 items-center pt-1 md:pt-0">
                            <img
                                alt="Your Company"
                                src="./images/logo-light.png"
                                className="w-auto max-h-11"
                            />
                        </div>
                        <div className="hidden md:ml-6 md:block">
                            <div className="flex md:space-x-10 space-x-3">
                                {navigation.map((item) => (
                                    item.hash ? (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            style={getLinksStyle(item)}
                                            className={classNames(
                                                'px-0 pt-2 text-md font-medium text-darkColor hover:text-themColor transition-all duration-300',
                                            )}
                                        >
                                            {item.name}
                                        </a>
                                    ) : (
                                        // For non-hash links, use NavLink
                                        <NavLink
                                            key={item.name}
                                            to={item.href}
                                            style={getLinksStyle(item)}
                                            className={classNames(
                                                'px-0 pt-2 text-md font-medium text-darkColor hover:text-themColor transition-all duration-300',
                                            )}
                                        >
                                            {item.name}
                                        </NavLink>
                                    )
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 hidden md:flex items-center gap-3 pr-2 sm:static md:inset-auto md:ml-6 md:pr-0">
                        <Link
                            to="https://www.linkedin.com/in/abdelrahman-assal-798baa195"
                            className="soial-icons group relative rounded-full text-mainColor bg-icon p-2 text-center hidden md:inline-block focus:outline-none"
                            target='blank'
                        >
                            <span className="absolute -inset-0 scale-0 rounded-full bg-linear-30 from-themColor to-themColor2 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all ease-in-out duration-300" />
                            <TiSocialLinkedin aria-hidden="true" className="h-6 w-6 relative group-hover:text-white transition-all ease-in-out duration-300" />
                        </Link>
                        <Link
                            to="https://github.com/AbdoAssall"
                            className="soial-icons group relative rounded-full text-mainColor bg-icon p-2 text-center hidden md:inline-block focus:outline-none"
                            target='blank'
                        >
                            <span className="absolute -inset-0 scale-0 rounded-full bg-linear-30 from-themColor to-themColor2 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all ease-in-out duration-300" />
                            <IoLogoGithub aria-hidden="true" className="h-6 w-6 relative group-hover:text-white transition-all ease-in-out duration-300" />
                        </Link>
                        <Link
                            to="https://twitter.com/abdoassal83"
                            className="soial-icons group relative rounded-full text-mainColor bg-icon p-2 text-center hidden md:inline-block focus:outline-none"
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
                            <span className='group-hover:text-white relative transition-all ease-in-out duration-300'>Let's Connect</span>
                        </a>
                    </div>
                    <button
                        aria-label='dark-mode'
                        className="md:pl-3 w-7 h-7 text-2xl cursor-pointer rounded-full"
                        onClick={toggleDarkMode}
                    >
                        {theme === "dark"
                            ? (<FaSun className={`text-amber-400`} />)
                            : (<FaMoon className={`text-mainColor`} />)
                        }
                    </button>
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
                            className={classNames(
                                isItemActive(item) ? 'bg-themColor text-white' : 'text-darkColor focus:bg-icon hover:bg-icon',
                                'block rounded-md px-3 py-2 text-base font-medium',
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                    <Link
                        to="https://github.com/AbdoAssall"
                        target="_blank"
                        className='soial-icons inline-block bg-linear-30 from-themColor to-themColor2 text-white text-lg ml-2 px-7 py-2 text-center rounded-md hover:opacity-90'
                        style={{ marginBottom: 22 }}>
                        <LuGithub className='w-5 h-5' />
                    </Link>
                    <a
                        href='#contact'
                        className='group block relative bg-transparent sm:text-md md:text-lg border-2 px-5 pb-2 pt-3 !w-full text-center transition-all ease-in-out duration-300'
                        style={borderGradient}
                    >
                        <span className="absolute start-0 top-0 h-full w-0 bg-linear-30 from-themColor to-themColor2 group-focus:w-full group-hover:w-full transition-all ease-in-out duration-300" />
                        <span className='group-focus:text-white group-hover:text-white relative transition-all ease-in-out duration-300'>Let's Connect</span>
                    </a>
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}
export default Navbar;
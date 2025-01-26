import { useState, useEffect } from 'react'
import '../../assest/style/navbar.css'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';
import { TiSocialLinkedin } from "react-icons/ti";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";
import { LuGithub } from "react-icons/lu";



const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'About', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Skills', href: '#', current: false },
]
// const socialLinks = [
//     { name: 'Linkedin', href: '#', current: false},
//   ]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const Navbar = () => {
  const [navbarClass, setNavbarClass] = useState("")
  const [lastScrollY, setLastScrollY] = useState(0);

  const borderGradient = {
    borderImageSlice: '1',
    borderImageSource: 'linear-gradient(30deg, #6229cf, #cc57fa)'
  }
  const handelScroll = () => {
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
  }

  useEffect(() => {
    window.addEventListener("scroll", handelScroll);

    return () => {
      window.removeEventListener('scroll', handelScroll)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);

  return (
    <Disclosure as="nav" className={`navbar ${navbarClass} bg-transparent`}>
      <div className="mx-auto max-w-7xl sm:mt-4 px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-mainColor focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-end me-3 sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              {/* <img
              alt="Your Company"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              className="h-8 w-auto"
            /> */}
              <div className='intro-titl pt-4 sm:pt-2'>
                <span className='inline-block text-3xl'>
                  Abdo Assal
                </span>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex md:space-x-10 space-x-3">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    style={borderGradient}
                    className={classNames(
                      item.current ? 'text-themColor border-b' : 'text-darkColor hover:text-themColor transition-all duration-500',
                      'px-0 pt-2 text-md font-medium',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center gap-3 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Link
              to="https://www.linkedin.com/in/abdelrahman-assal-798baa195"
              className="soial-icons group relative rounded-full text-mainColor bg-icon p-2 text-center hidden sm:inline-block focus:outline-none"
              target='blank'
            >
              <span className="absolute -inset-0 scale-0 rounded-full bg-linear-30 from-themColor to-themColor2 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all ease-in-out duration-300" />
              <TiSocialLinkedin aria-hidden="true" className="h-6 w-6 relative group-hover:text-white transition-all ease-in-out duration-300" />
            </Link>
            <Link
              to="https://github.com/AbdoAssall"
              className="soial-icons group relative rounded-full text-mainColor bg-icon p-2 text-center hidden sm:inline-block focus:outline-none"
              target='blank'
            >
              <span className="absolute -inset-0 scale-0 rounded-full bg-linear-30 from-themColor to-themColor2 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all ease-in-out duration-300" />
              <IoLogoGithub aria-hidden="true" className="h-6 w-6 relative group-hover:text-white transition-all ease-in-out duration-300" />
            </Link>
            <Link
              to="https://twitter.com/abdoassal83"
              className="soial-icons group relative rounded-full text-mainColor bg-icon p-2 text-center hidden sm:inline-block focus:outline-none"
              target='blank'
            >
              <span className="absolute -inset-0 scale-0 rounded-full  bg-linear-30 from-themColor to-themColor2 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all ease-in-out duration-300" />
              <IoLogoTwitter aria-hidden="true" className="h-6 w-6 relative group-hover:text-white transition-all ease-in-out duration-300" />
            </Link>

            {/* Profile dropdown */}
            <button className='group relative bg-transparent hidden sm:inline-block md:text-lg border-2 px-5 py-2 lg:px-6 lg:py-3 text-center transition-all ease-in-out duration-300' style={borderGradient}>
              <span className="absolute start-0 top-0 h-full w-0  bg-linear-30 from-themColor to-themColor2 group-hover:w-full transition-all ease-in-out duration-300" />
              <span className='group-hover:text-white relative transition-all ease-in-out duration-300'>Let's Connect</span>
            </button>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-themColor text-white' : 'text-darkColor hover:bg-icon',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
          <button className='bg-linear-30 from-themColor to-themColor2 text-white text-lg ml-2 px-7 py-2 text-center rounded-md hover:opacity-90' style={{ marginBottom: 22 }}>
            <LuGithub className='w-5 h-5' />
          </button>
          <button className='group relative bg-transparent sm:text-md md:text-lg border-2 px-5 py-2 lg:px-6 lg:py-3 w-full text-center transition-all ease-in-out duration-300' style={borderGradient}>
            <span className="absolute start-0 top-0 h-full w-0 bg-linear-30 from-themColor to-themColor2 group-hover:w-full transition-all ease-in-out duration-300" />
            <span className='group-hover:text-white relative transition-all ease-in-out duration-300'>Let's Connect</span>
          </button>
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}

export default Navbar
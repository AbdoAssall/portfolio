/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import { ReactTyped } from "react-typed";
import { TiSocialLinkedin } from "react-icons/ti";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";
import '../assest/style/main.css'
import { BsFillLightningFill } from "react-icons/bs";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const Main = () => {
    return (
        <div className='py-6 block px-1 sm:flex-grow'>
            <div className='site-hero my-4 lg:mb-24'>
                <div className='container md:mx-auto px-4 lg:px-4'>
                    <div className='hero-tow-column flex flex-wrap sm:flex-col lg:flex-row gap-9 items-center'>
                        <div className='site-hero-right flex-grow flex-shrink-0 basis-full sm:basis-1/2 sm:max-w-xl md:max-w-2xl lg:max-w-4xl'>
                            <h1 className='text-xl font-bold text-white dark:text-white pb-3 pt-4 px-3 w-fit drop-shadow-lg'>
                                Welcom All in My Portfolio
                                <BsFillLightningFill className='text-yellow-300 text-2xl inline-block ml-2' />
                            </h1>
                            <div className='intro-title text-5xl mt-6 dark:text-white'>
                                <p>Hi! I'm Abdelrahman Assal</p>
                                <p>I'm a {" "}
                                    <span className='block sm:inline-block min-w-60 text-3xl sm:text-5xl'>
                                        <ReactTyped
                                            strings={["Software Developer", "Frontend Developer", "Full Stack Developer"]}
                                            typeSpeed={50}
                                            backSpeed={30}
                                            loop
                                            smartBackspace
                                        />
                                    </span>
                                </p>
                            </div>
                            <p className='text-xl max-w-2xl mt-5 mb-6 md:mb-8 dark:text-white'>A full stack web developer who is passionate about creating
                                beautiful,  functional and responsive websites 🚀
                            </p>
                            <div className="mb-8 md:mb-0 flex items-center gap-3">
                                <Link
                                    to="https://www.linkedin.com/in/abdelrahman-assal-798baa195"
                                    className="soial-icons group relative rounded-full text-mainColor bg-icon hover:bg-transparent p-1 text-center inline-block md:hidden focus:outline-none"
                                    target='blank'
                                >
                                    <span className="absolute -inset-0 scale-0 rounded-full bg-linear-30 from-themColor to-themColor2 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all ease-in-out duration-300" />
                                    <TiSocialLinkedin aria-hidden="true" className="h-5 w-5 relative group-hover:text-white transition-all ease-in-out duration-300" />
                                </Link>
                                <Link
                                    to="https://github.com/AbdoAssall"
                                    className="soial-icons group relative rounded-full text-mainColor bg-icon hover:bg-transparent p-1 text-center inline-block md:hidden focus:outline-none"
                                    target='blank'
                                >
                                    <span className="absolute -inset-0 scale-0 rounded-full bg-linear-30 from-themColor to-themColor2 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all ease-in-out duration-300" />
                                    <IoLogoGithub aria-hidden="true" className="h-5 w-5 relative group-hover:text-white transition-all ease-in-out duration-300" />
                                </Link>
                                <Link
                                    to="https://twitter.com/abdoassal83"
                                    className="soial-icons group relative rounded-full text-mainColor bg-icon hover:bg-transparent p-1 text-center inline-block md:hidden focus:outline-none"
                                    target='blank'
                                >
                                    <span className="absolute -inset-0 scale-0 rounded-full  bg-linear-30 from-themColor to-themColor2 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all ease-in-out duration-300" />
                                    <IoLogoTwitter aria-hidden="true" className="h-5 w-5 relative group-hover:text-white transition-all ease-in-out duration-300" />
                                </Link>
                            </div>
                            <a href='#contact' className='btn connect-btn'>
                                Let's Connect
                                <IoArrowForwardCircleOutline className='arrow-btn inline-block ml-2 text-2xl' />
                            </a>
                        </div>
                        <div className='site-hero-left flex-1 self-start relative min-w-80 max-w-96'>
                            <div className='site-cover-image'>
                                <img src="./images/astronaut.svg" alt='astronaut' loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Main
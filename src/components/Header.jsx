import { ReactTyped } from "react-typed";
import '../assest/style/main.css'
import { BsFillLightningFill } from "react-icons/bs";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import astronaut from '../assest/images/astronaut.svg'

const Main = () => {
    return (
        <div className='block px-1 sm:flex-grow'>
            <div className='site-hero mt-4 mb-24'>
                <div className='container md:mx-auto px-4 lg:px-4'>
                    <div className='hero-tow-column flex flex-wrap sm:flex-col lg:flex-row gap-9 items-center'>
                        <div className='site-hero-right flex-grow flex-shrink-0 basis-full sm:basis-1/2 sm:max-w-xl md:max-w-2xl lg:max-w-4xl'>
                            <h1 className='text-xl font-bold text-white dark:text-white bg-gradient-primary pb-3 pt-4 px-3 w-fit drop-shadow-lg'>
                                Welcom All in My Portfolio
                                <BsFillLightningFill className='text-yellow-300 text-2xl inline-block ml-2' />
                            </h1>
                            <div className='intro-title text-5xl mt-6'>
                                <p>Hi! I'm Abdelrahman Assal</p>
                                <p>I'm a {" "}
                                    <span className='block sm:inline-block min-w-60 text-4xl sm:text-5xl'>
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
                            <p className='text-xl max-w-2xl mt-5 mb-8'>A full stack web developer who is passionate about creating 
                                beautiful,  functional and responsive websites 🚀
                            </p>
                            <button className='btn connect-btn'>
                                Let's Connect
                                <IoArrowForwardCircleOutline className='arrow-btn inline-block ml-2 text-2xl' />
                            </button>
                        </div>
                        <div className='site-hero-left flex-1 self-start relative min-w-80 max-w-96'>
                            <div className='site-cover-image'>
                                <img src={astronaut} alt='astronaut' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Main
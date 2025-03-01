import { useEffect } from 'react';
import AOS from 'aos';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Skills = () => {
      useEffect(() => {
        AOS.init({
          duration: 900,
          once: true // Set to true if you want animations to occur only once
        });
      }, []);
    
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1140,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: false,
                },
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    };

    return (
        <div className="py-6 px-4 md:px-0">
            <div id="skills" className="px-6 py-10 max-w-6xl mx-auto rounded-2xl shadow-xl bg-gray-250 dark:bg-dark-100">
                <div className="text-center text-darkColor">
                    <h1 data-aos="fade-down" className="text-2xl font-semibold text-center !text-darkColor capitalize lg:text-3xl dark:!text-white">
                        {/* What clients saying */}
                        Skills
                    </h1>

                    <div data-aos="fade-up" className="flex justify-center mx-auto my-2">
                        <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                        <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                        <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
                    </div>
                    <span className="!text-gray-500 dark:!text-gray-350">Waht skills i have</span>

                    <div className="px-6 mx-aut mt-16">
                        <Slider {...settings}>
                            <div className="text-center">
                                <img src="/images/logos/html5.svg" className="w-20 sm:w-26 h-auto object-cover mx-auto" alt="logo" loading="lazy" />
                                <h3 className="!text-darkColor dark:!text-white text-lg capitalize mt-2">HTML5</h3>
                            </div> 
                            <div className="text-center">
                                <img src="/images/logos/css3.svg" className="w-20 sm:w-26 h-auto object-cover mx-auto" alt="logo" loading="lazy" />
                                <h3 className="!text-darkColor dark:!text-white text-lg capitalize mt-2">CSS3</h3>
                            </div> 
                            <div className="text-center">
                                <img src="/images/logos/js.svg" className="w-20 sm:w-26 h-auto object-cover mx-auto" alt="logo" loading="lazy" />
                                <h3 className="!text-darkColor dark:!text-white text-lg capitalize mt-2">JavaScript</h3>
                            </div> 
                            <div className="text-center">
                                <img src="/images/logos/react.svg" className="w-44 h-auto object-cover mx-auto" alt="logo" loading="lazy" />
                                <h3 className="!text-darkColor dark:!text-white text-lg capitalize">react</h3>
                            </div> 
                            <div className="text-center">
                                <img src="/images/logos/laravel.svg" className="w-20 sm:w-26 h-auto object-cover mx-auto" alt="logo" loading="lazy" />
                                <h3 className="!text-darkColor dark:!text-white text-lg capitalize mt-2">laravel</h3>
                            </div> 
                            <div className="text-center">
                                <img src="/images/logos/mysql.svg" className="w-20 sm:w-26 h-auto object-cover mx-auto" alt="logo" loading="lazy" />
                                <h3 className="!text-darkColor dark:!text-white text-lg capitalize mt-2">mySql</h3>
                            </div> 
                            <div className="text-center">
                                <img src="/images/logos/bootstrap.svg" className="w-20 sm:w-26 h-auto object-cover mx-auto" alt="logo" loading="lazy" />
                                <h3 className="!text-darkColor dark:!text-white text-lg capitalize mt-2">bootstrap</h3>
                            </div> 
                            <div className="text-center">
                                <img src="/images/logos/tailwindcss.svg" className="w-20 sm:w-26 h-auto object-cover mx-auto" alt="logo" loading="lazy" />
                                <h3 className="!text-darkColor dark:!text-white text-lg capitalize mt-2">tailwindCss</h3>
                            </div> 
                            <div className="text-center">
                                <img src="/images/logos/sass.svg" className="w-20 sm:w-26 h-auto object-cover mx-auto" alt="logo" loading="lazy" />
                                <h3 className="!text-darkColor dark:!text-white text-lg capitalize mt-2">Sass</h3>
                            </div> 
                        </Slider>
                    </div>
                </div>
            </div >
        </div>
    )
}
export default Skills
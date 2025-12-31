import { useEffect } from 'react';
import AOS from 'aos';

const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div id="about" className="py-10 px-4 md:px-0">
            <div className="max-w-6xl mx-auto rounded-2xl shadow-xl bg-gray250 dark:bg-dark-100 overflow-hidden">
                <div className="flex flex-col lg:flex-row items-center">

                    {/* Image Section */}
                    <div className="w-full lg:w-1/2 relative" data-aos="fade-right">
                        <div className="relative w-full h-[400px] lg:h-[500px]">
                            <img
                                src="/images/abdo.webp"
                                alt="Abdo Assal"
                                className="w-full h-full object-cover object-top"
                            />
                            {/* Creative Overlay/Border Effect */}
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-250 dark:from-dark-100 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-gray-250 lg:dark:to-dark-100 opacity-90 lg:opacity-100"></div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full lg:w-1/2 p-8 lg:p-12 text-center lg:text-left" data-aos="fade-left">
                        <h2 className="text-3xl lg:text-4xl font-bold text-darkColor dark:text-white mb-4">
                            About <span className="text-themeColor">Me</span>
                        </h2>
                        <div className="h-1 w-20 bg-themeColor mx-auto lg:mx-0 rounded-full mb-6"></div>

                        <p className="text-gray-600 dark:text-gray-350 text-lg leading-relaxed mb-8">
                            I'm <span className="font-semibold text-darkColor dark:text-white">Abdo Assal</span>, a passionate developer dedicated to building modern, responsive, and user-friendly web applications. With a keen eye for detail and a love for clean code, I transform ideas into seamless digital experiences.
                        </p>

                        {/* Stats / Details */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8 text-darkColor dark:text-white">
                            <div className="p-4 rounded-xl bg-gray-200 dark:bg-dark-200 shadow-sm">
                                <h3 className="text-2xl font-bold text-themeColor">2+</h3>
                                <p className="text-sm opacity-80">Years Experience</p>
                            </div>
                            <div className="p-4 rounded-xl bg-gray-200 dark:bg-dark-200 shadow-sm">
                                <h3 className="text-2xl font-bold text-themeColor">10+</h3>
                                <p className="text-sm opacity-80">Projects Completed</p>
                            </div>
                            <div className="p-4 rounded-xl bg-gray-200 dark:bg-dark-200 shadow-sm col-span-2 md:col-span-1">
                                <h3 className="text-2xl font-bold text-themeColor">100%</h3>
                                <p className="text-sm opacity-80">Client Satisfaction</p>
                            </div>
                        </div>

                        <a href="#contact" className="btn connect-btn pt-1 hover:scale-105 transform transition-transform">
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

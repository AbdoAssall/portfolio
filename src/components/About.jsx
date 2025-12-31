import { useEffect } from 'react';
import AOS from 'aos';

const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const StatCard = ({ number, label, className = "" }) => (
        <div className={`p-4 rounded-xl bg-gray-250 dark:bg-dark-200 border border-transparent hover:border-themColor/30 transition-colors group ${className}`}>
            <h3 className="text-2xl font-bold text-darkColor dark:text-white mb-1 group-hover:text-themColor transition-colors">
                {number}
            </h3>
            <p className="text-sm text-secondary">{label}</p>
        </div>
    );

    return (
        <section id="about" className="relative py-20 overflow-hidden bg-transparent dark:bg-dark-500">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-themColor/5 blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-themColor2/5 blur-3xl pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Column 1: Profile Image */}
                    <div className="relative group flex justify-center lg:justify-start" data-aos="fade-right">
                        {/* Glow Effect behind image */}
                        <div className="absolute inset-0 bg-[image:var(--gradient-primary)] rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 scale-90"></div>

                        {/* Image Container */}
                        <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-1.5 bg-white dark:bg-dark-200 shadow-2xl">
                            {/* Inner Gradient Border */}
                            <div className="absolute inset-0 rounded-full border-2 border-transparent bg-[image:var(--gradient-primary)] [mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)]"></div>

                            {/* Actual Image - Replace src with your import or URL */}
                            <img
                                src="./images/abdo.webp"
                                alt="Profile Picture"
                                className="w-full h-full object-cover rounded-full border-4 border-white dark:border-dark-200 transition-transform duration-500 group-hover:scale-[1.02]"
                            />

                            {/* Floating Badge (Experience) */}
                            <div className="absolute bottom-4 right-4 md:right-8 bg-white dark:bg-dark-100 p-4 rounded-2xl shadow-lg border border-gray-100 dark:border-dark-300 animate-bounce [animation-duration:3s]">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-themColor/10 flex items-center justify-center text-themColor">
                                        {/* Star Icon */}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs text-secondary font-bold uppercase tracking-wider">Experience</p>
                                        <p className="text-lg font-bold text-darkColor dark:text-white">2+ Years</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Text Content */}
                    <div data-aos="fade-left">
                        {/* Section Tag */}
                        <span className="inline-block py-1 px-3 rounded-md bg-themColor/10 text-themColor text-sm font-bold tracking-wide mb-4">
                            ABOUT ME
                        </span>

                        {/* Heading */}
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-darkColor dark:text-white leading-tight">
                            Transforming ideas into <br className="hidden md:block" />
                            <span className="bg-[image:var(--gradient-primary)] bg-clip-text text-transparent">
                                digital reality.
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="text-mainColor dark:text-gray-350 text-lg mb-6 leading-relaxed">
                            Hello! I'm a passionate <strong>Frontend Developer</strong> based in Port Said. I specialize in building responsive, high-performance web applications using React.js and modern CSS.
                        </p>
                        <p className="text-secondary dark:text-gray-450 mb-8 leading-relaxed">
                            With a background in Network Engineering, I bring a unique perspective to web performance and optimization. I am dedicated to writing clean code and creating intuitive user experiences.
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                            <StatCard number="15+" label="Projects Done" />
                            <StatCard number="100%" label="Satisfaction" />
                            <StatCard number="24/7" label="Support" className="col-span-2 md:col-span-1" />
                        </div>

                        {/* Tech Stack Highlights */}
                        <div className="mb-8">
                            <p className="text-sm font-bold text-darkColor dark:text-white mb-3 uppercase tracking-wide">Tech Stack</p>
                            <div className="flex flex-wrap gap-2">
                                {['React.js', 'Tailwind CSS', 'JavaScript (ES6+)', 'Git'].map((tech) => (
                                    <span key={tech} className="px-3 py-1.5 text-sm rounded-md bg-white dark:bg-dark-100 border border-gray-350 dark:border-dark-300 text-secondary">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* CTA Button */}
                        <a
                            href="#contact"
                            className="btn connect-btn !pt-3.5 hover:scale-105 transform transition-transform shadow-[0_10px_20px_-10px_rgba(98,41,207,0.5)] hover:shadow-[0_15px_25px_-10px_rgba(98,41,207,0.6)]"
                        >
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
        </section>
        // <div id="about" className="py-10 px-4 md:px-0">
        //     <div className="max-w-6xl mx-auto rounded-2xl shadow-xl bg-gray250 dark:bg-dark-100 overflow-hidden">
        //         <div className="flex flex-col lg:flex-row items-center">

        //             {/* Image Section */}
        //             <div className="w-full lg:w-1/2 relative" data-aos="fade-right">
        //                 <div className="relative w-full h-[400px] lg:h-[500px]">
        //                     <img
        //                         src="/images/abdo.webp"
        //                         alt="Abdo Assal"
        //                         className="w-full h-full object-cover object-top"
        //                     />
        //                     {/* Creative Overlay/Border Effect */}
        //                     <div className="absolute inset-0 bg-gradient-to-t from-gray-250 dark:from-dark-100 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-gray-250 lg:dark:to-dark-100 opacity-90 lg:opacity-100"></div>
        //                 </div>
        //             </div>

        //             {/* Content Section */}
        //             <div className="w-full lg:w-1/2 p-8 lg:p-12 text-center lg:text-left" data-aos="fade-left">
        //                 <h2 className="text-3xl lg:text-4xl font-bold text-darkColor dark:text-white mb-4">
        //                     About <span className="text-themeColor">Me</span>
        //                 </h2>
        //                 <div className="h-1 w-20 bg-themeColor mx-auto lg:mx-0 rounded-full mb-6"></div>

        //                 <p className="text-gray-600 dark:text-gray-350 text-lg leading-relaxed mb-8">
        //                     I'm <span className="font-semibold text-darkColor dark:text-white">Abdo Assal</span>, a passionate developer dedicated to building modern, responsive, and user-friendly web applications. With a keen eye for detail and a love for clean code, I transform ideas into seamless digital experiences.
        //                 </p>

        //                 {/* Stats / Details */}
        //                 <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8 text-darkColor dark:text-white">
        //                     <div className="p-4 rounded-xl bg-gray-200 dark:bg-dark-200 shadow-sm">
        //                         <h3 className="text-2xl font-bold text-themeColor">2+</h3>
        //                         <p className="text-sm opacity-80">Years Experience</p>
        //                     </div>
        //                     <div className="p-4 rounded-xl bg-gray-200 dark:bg-dark-200 shadow-sm">
        //                         <h3 className="text-2xl font-bold text-themeColor">10+</h3>
        //                         <p className="text-sm opacity-80">Projects Completed</p>
        //                     </div>
        //                     <div className="p-4 rounded-xl bg-gray-200 dark:bg-dark-200 shadow-sm col-span-2 md:col-span-1">
        //                         <h3 className="text-2xl font-bold text-themeColor">100%</h3>
        //                         <p className="text-sm opacity-80">Client Satisfaction</p>
        //                     </div>
        //                 </div>

        //                 <a href="#contact" className="btn connect-btn pt-1 hover:scale-105 transform transition-transform">
        //                     Contact Me
        //                 </a>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default About;

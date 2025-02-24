import { Link } from "react-router-dom";
import { TiSocialLinkedin } from "react-icons/ti";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";

const footer = () => {
    return (
        <div className="px-4 sm:px-11 py-3 max-w-full bg-white flex items-center justify-center sm:justify-between flex-col sm:flex-row">
            <div className="mt-1 sm:mt-0">
                &copy; 2024 <b>AbdoAssal</b> All rights reserved.
            </div>
            <div className="sm:mt-0">
                <div className="flex items-center gap-3">
                    <Link
                        to="https://www.linkedin.com/in/abdelrahman-assal-798baa195"
                        className="soial-icons group relative rounded-full text-mainColor border border-gray-300 p-2 text-center inline-block focus:outline-none"
                        target='blank'
                    >
                        <span className="absolute -inset-0 scale-0 rounded-full bg-linear-30 from-themColor to-themColor2 opacity-0 group-hover:opacity-100 group-active:opacity-100 group-active:scale-100 group-hover:scale-100 transition-all ease-in-out duration-300" />
                        <TiSocialLinkedin aria-hidden="true" className="h-5 w-5 relative group-hover:text-white group-active:text-white transition-all ease-in-out duration-300" />
                    </Link>
                    <Link
                        to="https://github.com/AbdoAssall"
                        className="soial-icons group relative rounded-full text-mainColor border border-gray-300 p-2 text-center inline-block focus:outline-none"
                        target='blank'
                    >
                        <span className="absolute -inset-0 scale-0 rounded-full bg-linear-30 from-themColor to-themColor2 opacity-0 group-hover:opacity-100 group-active:opacity-100 group-active:scale-100 group-hover:scale-100 transition-all ease-in-out duration-300" />
                        <IoLogoGithub aria-hidden="true" className="h-5 w-5 relative group-hover:text-white group-active:text-white transition-all ease-in-out duration-300" />
                    </Link>
                    <Link
                        to="https://twitter.com/abdoassal83"
                        className="soial-icons group relative rounded-full text-mainColor border border-gray-300 p-2 text-center inline-block focus:outline-none"
                        target='blank'
                    >
                        <span className="absolute -inset-0 scale-0 rounded-full  bg-linear-30 from-themColor to-themColor2 opacity-0 group-hover:opacity-100 group-active:opacity-100 group-active:scale-100 group-hover:scale-100 transition-all ease-in-out duration-300" />
                        <IoLogoTwitter aria-hidden="true" className="h-5 w-5 relative group-hover:text-white group-active:text-white transition-all ease-in-out duration-300" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default footer;
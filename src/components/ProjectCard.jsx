import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Card, CardBody, CardFooter, Tooltip } from "@material-tailwind/react";
import { ImLink } from "react-icons/im";
import { IoLogoGithub } from "react-icons/io";
import { MdArrowRightAlt } from "react-icons/md";

export function ProjectCard({ project }) {
    return (
        <Card className={`mt-6 w-full sm:w-72 lg:w-80 
                 dark:bg-dark-100/60 dark:border-white/30 dark:text-white dark:shadow-lg dark:hover:border-white
                  bg-gray-250 border-gray-300 hover:border-themColor
            !rounded-md border hover:rotate-1 transition-all duration-500 ease-in-out
            hover:shadow-xl`}>
            <div className="relative w-full h-auto md:h-52">
                <img
                    src={project.img}
                    alt="card-image"
                    className="w-full rounded-t-md"
                />
            </div>
            <CardBody className="text-left">
                <h3 className="mb-3 text-lg capitalize font-semibold dark:!text-white">
                    {project.title}
                </h3>
                <p className="text-mainColor text-[0.938rem] dark:text-gray-300">
                    {project.desc}
                </p>
            </CardBody>
            <CardFooter className="pt-1 flex justify-between">
                <div className="flex gap-3">
                    <Tooltip content="Demo" className="bg-mainColor dark:bg-gray-800 font-medium">
                        <Link to={project.demo_link} className="dark:text-gray-300">
                            <ImLink aria-hidden="true" className="w-5 h-5" />
                        </Link>
                    </Tooltip>
                    <Tooltip content="GitHub" className="bg-mainColor dark:bg-gray-800 font-medium">
                        <Link to={project.github_link} className="dark:text-gray-300">
                            <IoLogoGithub aria-hidden="true" className="w-5 h-5" />
                        </Link>
                    </Tooltip>
                </div>
                <button className="group flex items-center gap-1 text-blue-500 font-medium dark:text-themColor2 cursor-pointer">
                    <span>More</span>
                    <MdArrowRightAlt aria-hidden="true" className="w-5 h-5 group-hover:translate-x-1" />
                </button>
            </CardFooter>
        </Card>
    );
}

ProjectCard.propTypes = {
    project: PropTypes.shape({
        id: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
        demo_link: PropTypes.string.isRequired,
        github_link: PropTypes.string.isRequired
    }).isRequired
}
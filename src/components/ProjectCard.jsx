import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Card, CardBody, CardFooter, Tooltip } from "@material-tailwind/react";
import { ImLink } from "react-icons/im";
import { IoLogoGithub } from "react-icons/io";
import { MdArrowRightAlt } from "react-icons/md";

export function ProjectCard({ project }) {
    return (
        <Card className="mt-6 w-full sm:w-72 lg:w-80 bg-gray-250 !rounded-md border border-themColor hover:rotate-1 transition-transform duration-500 ease-in-out">
            <div className="relative w-full h-auto md:h-52">
                <img
                    src={project.img}
                    alt="card-image"
                    className="w-full rounded-t-md"
                />
            </div>
            <CardBody className="text-left">
                <h3 className="mb-3 text-lg capitalize">
                    {project.title}
                </h3>
                <p className="text-mainColor text-[0.938rem]">
                   {project.desc}
                </p>
            </CardBody>
            <CardFooter className="pt-1 flex justify-between">
                <div className="flex gap-3">
                    <Tooltip content="Demo" className="bg-mainColor font-medium">
                        <Link to={project.demo_link} >
                            <ImLink aria-hidden="true" className="w-5 h-5" />
                        </Link>
                    </Tooltip>
                    <Tooltip content="GitHub" className="bg-mainColor font-medium">
                        <Link to={project.github_link} >
                            <IoLogoGithub aria-hidden="true" className="w-5 h-5" />
                        </Link>
                    </Tooltip>
                </div>
                <button className="group flex items-center gap-1 text-blue-500 font-medium cursor-pointer">
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
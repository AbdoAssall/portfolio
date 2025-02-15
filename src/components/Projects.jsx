import { useEffect, useState } from 'react';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { ProjectCard } from './ProjectCard';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true // Set to true if you want animations to occur only once
    });
  }, []);

  // Refresh AOS when tab changes
  useEffect(() => {
    // Small delay to ensure content is rendered before animation
    const timer = setTimeout(() => {
      AOS.refresh();
    }, 50);

    return () => clearTimeout(timer);
  }, [activeTab]);

  const projects = [
    {
      id: 1,
      label: 'react',
      title: 'react',
      desc: 'The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.',
      img: 'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      demo_link: 'https://abdoassal-portfolio.netlify.app/',
      github_link: 'https://github.com/AbdoAssall'
    },
    {
      id: 2,
      label: 'react',
      title: 'react2',
      desc: 'The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.',
      img: 'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      demo_link: 'https://abdoassal-portfolio.netlify.app/',
      github_link: 'https://github.com/AbdoAssall'
    },
    {
      id: 3,
      label: 'js',
      title: 'JavaScript',
      desc: 'The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.',
      img: 'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      demo_link: 'https://abdoassal-portfolio.netlify.app/',
      github_link: 'https://github.com/AbdoAssall'
    },
    {
      id: 4,
      label: 'html&css',
      title: 'HTML',
      desc: 'The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.',
      img: 'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      demo_link: 'https://abdoassal-portfolio.netlify.app/',
      github_link: 'https://github.com/AbdoAssall'
    },
    {
      id: 5,
      label: 'css',
      title: 'CSS',
      desc: 'The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.',
      img: 'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      demo_link: 'https://abdoassal-portfolio.netlify.app/',
      github_link: 'https://github.com/AbdoAssall'
    },
    {
      id: 6,
      label: 'js',
      title: 'app',
      desc: 'The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.',
      img: 'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      demo_link: 'https://abdoassal-portfolio.netlify.app/',
      github_link: 'https://github.com/AbdoAssall'
    },
  ];

  const taps = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "React",
      value: "react",
    },

    {
      label: "JavaScript",
      value: "js",
    },
    {
      label: "HTML & CSS",
      value: "html&css",
    },
  ];

  const getFilterProjects = () => {
    if (activeTab === 'all') {
      return projects;
    }
    return projects.filter(project => project.label === activeTab);
  };

  return (
    <div id="projects" className="py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="section-title mb-10">
          <h1 data-aos="fade-down" className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
            Projects
          </h1>

          <div className="flex justify-center mt-3" data-aos="fade-up">
            <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
          </div>
        </div>

        <Tabs id="custom-animation" value={activeTab} className="text-center">
          <TabsHeader
            className="p-0 max-w-4xl mx-auto bg-gray-250 border rounded-full border-gray-200 shadow"
            indicatorProps={{
              className:
                `bg-linear-30 from-themColor to-themColor2 ${activeTab === 'react' || activeTab === 'js' ? 'rounded-none' : activeTab === 'all' ? 'rounded-l-full' : 'rounded-r-full'}`,
            }}
          >
            {taps.map(({ label, value }) => (
              <Tab key={value} value={value} onClick={() => setActiveTab(value)}
                className={`p-2 font-medium flex-grow w-auto h-auto sm:h-full sm:w-full ${activeTab === value
                  ? 'text-white font-bold'
                  : ''}`}>
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            <TabPanel value={activeTab} className='mt-6 max-w-7xl flex justify-center flex-wrap gap-x-7'>
              {getFilterProjects().map((project, index) => (
                <div
                  key={project.id}
                  data-aos="zoom-in"
                  data-aos-delay={index * 50}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </TabPanel>
          </TabsBody>
        </Tabs>
      </div>
    </div>
  )
}

export default Projects
import { useEffect, useState, useMemo, useCallback } from 'react';
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";
import { ProjectCard } from './ProjectCard';
import AOS from 'aos';
import Pagination from './Pagination';
import projects from '../projects.json'

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [currentProjects, setCurrentProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true // Set to true if you want animations to occur only once
    });
  }, []);

  // Refresh AOS when tab changes
  // useEffect(() => {
  //   // Small delay to ensure content is rendered before animation
  //   const timer = setTimeout(() => {
  //     AOS.refresh();
  //   }, 50);

  //   return () => clearTimeout(timer);
  // }, [activeTab]);

  const taps = [
    { label: "All", value: "all" },
    { label: "React", value: "react" },
    { label: "JavaScript", value: "js" },
    { label: "HTML & CSS", value: "html&css" },
  ];

  const getFilterProjects = useMemo(() => {
    if (activeTab === 'all') {
      return projects.sort(function (a, b) {
        return b.id - a.id
      });
    }
    const filterProjects = projects?.filter(project => project.label === activeTab);
    return filterProjects.sort(function (a, b) {
      return b.id - a.id
    });
  }, [activeTab]);

  const handlePageChange = useCallback((paginatedProjects) => {
    setCurrentProjects(paginatedProjects);
  }, [])

  // Reset pagination when tap cahnges
  useEffect(() => {
    setCurrentPage(1)
    const startIndex = 0;
    const endIndex = startIndex + itemsPerPage;
    setCurrentProjects(getFilterProjects.slice(startIndex, endIndex));
  }, [getFilterProjects, activeTab]);

  return (
    <div id="projects" className="py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="section-title mb-10">
          <h2 data-aos="fade-down" className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:!text-white">
            My Projects
          </h2>

          <div className="flex justify-center mt-3" data-aos="fade-up">
            <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
          </div>
        </div>

        <Tabs id="custom-animation" value={activeTab} className="text-center">
          <TabsHeader
            className="p-0 max-w-4xl mx-auto bg-gray-250 dark:bg-dark-100 border rounded-full border-gray-200 dark:border-dark-200 shadow"
            indicatorProps={{
              className:
                `bg-linear-30 from-themColor to-themColor2 ${activeTab === 'react' || activeTab === 'js' ? 'rounded-none' : activeTab === 'all' ? 'rounded-l-full' : 'rounded-r-full'}`,
            }}
          >
            {taps.map(({ label, value }) => (
              <Tab key={value} value={value} onClick={() => setActiveTab(value)}
                className={`p-2 font-medium flex-grow w-auto h-auto sm:h-full sm:w-full ${activeTab === value
                  ? 'text-white font-bold'
                  : 'text-mainColor dark:text-darkColo dark:text-white'}`}>
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            <TabPanel value={activeTab} className='mt-6 max-w-7xl flex justify-center flex-wrap gap-x-7'>
              {currentProjects?.map((project) => (
                <div
                  key={project.id}
                // data-aos="zoom-in"
                // data-aos-delay={index * 50}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </TabPanel>
          </TabsBody>
        </Tabs>

        <Pagination
          projects={getFilterProjects}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  )
}

export default Projects
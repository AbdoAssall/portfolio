import { useState } from 'react';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { ProjectCard } from './ProjectCard';

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");

  const data = [
    {
      label: "All",
      value: "all",
      desc: <ProjectCard />,
    },
    {
      label: "React",
      value: "react",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },

    {
      label: "JavaScript",
      value: "js",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "HTML & CSS",
      value: "html&css",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
  ];

  return (
    <div id="projects" className="py-12">
      <div className="mx-auto max-w-7xl px-2 sm:px-4">
        <div className="section-title mb-10">
          <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
            Projects
          </h1>

          <div className="flex justify-center mt-3">
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
                `bg-linear-30 from-themColor to-themColor2 ${
                  activeTab === 'react' || activeTab === 'js' ? 'rounded-none' :  activeTab === 'all' ? 'rounded-l-full' : 'rounded-r-full'}`,
            }}
          >
            {data.map(({ label, value }) => (
              <Tab key={value} value={value} onClick={() => setActiveTab(value)}
                className={`p-2 font-medium ${activeTab === value
                  ? 'text-white font-bold'
                  : ''}`}>
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody
            animate={{
              initial: { y: 250 },
              mount: { y: 0 },
              unmount: { y: 250 },
            }}
          >
            {data.map(({ value, desc }) => (
              <TabPanel key={value} value={value} className='mt-6 flex justify-center gap-3'>
                {desc}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </div>
  )
}

export default Projects
import PageLayout from '../components/layouts/PageLayout';
import Main from '../components/Header';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import About from '../components/About';


const Home = () => {
  return (
    <PageLayout>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </PageLayout>
  )
}
export default Home
import PageLayout from '../components/layouts/PageLayout';
import Main from '../components/Header';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <PageLayout>
      <Main />
      <Skills />
      <Projects />
      <Contact />
    </PageLayout>
  )
}
export default Home
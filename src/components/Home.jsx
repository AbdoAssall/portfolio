import PageLayout from './layouts/PageLayout';
import Main from './Header';
import Skills from './Skills';
import Projects from './Projects';

const Home = () => {
  return (
    <PageLayout>
      <Main />
      <Skills />
      <Projects />
    </PageLayout>
  )
}
export default Home
import css from './styles/App.module.scss';
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Expertise from "./Components/Expertise/Expertise";
import Works from "./Components/Works/Works"
import Projects from "./Components/Projects/Projects"
import People from "./Components/People/people";
import Footer from "./Components/Footer/Footer"
import Tech from './Components/Tech/Tech'

function App() {
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
      <Hero />
      <Expertise />
      <Tech />
      <Works />
      <Projects />
      {/* <People /> */}
      <Footer />
    </div>
  );
}

export default App;

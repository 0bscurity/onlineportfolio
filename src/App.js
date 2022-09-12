import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import NavigationBar from "./components/NavigationBar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Resume from "./components/Resume";


function App() {
  return (
      <main>
          <NavigationBar />
          <AboutMe />
          <Projects />
          <Resume />
      </main>
  );
}

export default App;

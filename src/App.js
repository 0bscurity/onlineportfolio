import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import NavigationBar from "./components/NavigationBar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";


function App() {
  return (
      <main>
          <NavigationBar />
          <AboutMe />
          <Projects />
      </main>
  );
}

export default App;

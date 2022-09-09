import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import AboutMe from "./components/AboutMe";
import NavigationBar from "./components/NavigationBar";


function App() {
  return (
      <main>
          <NavigationBar />
          <AboutMe />
      </main>
  );
}

export default App;

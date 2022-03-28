import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import { LanguageContextProvider } from './context';

import { Home } from './views/home/Home';
import { Projects } from './views/projects/Projects';
import { Contact } from './views/contact/Contact';
import { Resume } from './views/resume';
import { Menu } from './components/menu/Menu';

function App() {
  return (
    <div className="py-3">
      <LanguageContextProvider>
        <Router>
          <Menu />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='projects' element={<Projects />} />
            <Route path='contact' element={<Contact />} />
            <Route path='resume' element={<Resume />} />
          </Routes>
        </Router>
      </LanguageContextProvider>
    </div>
  );
}

export default App;

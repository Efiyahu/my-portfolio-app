import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </ThemeContextProvider>
  );
}

export default App;

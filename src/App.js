import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About'
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';
import AOSInitializer from './components/AOS'; 

function App() {
  return (
    <div className="App">
      <AOSInitializer />
      <Header/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

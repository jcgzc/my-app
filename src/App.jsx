import logo from './logo.svg';
import './App.css';
import img from "./img/airoplaine.jpg"
import Title from './components/Title';
import { Component } from 'react';
import MenuItems from './components/MenuItems';
/* JSX Code, used when using React (JSX) JS XTLM JavaScript Syntax Extension, HTML and Javascript togethere with css */



function App() {
  const firstName = "John";
  const lastName = "Doe";
  const x = true;
  return (
    //JSX Code
    <div className="App">

    <MenuItems/>
    <Title />
     <h1>Hello React</h1>
     <h2>{firstName} {lastName}</h2>
      <h3>{x ? 'Yes' : 'No'}</h3>

      <img src={img} alt="Responsive" className="responsive-img" />

    </div>

  );
}

export default App;

import React from 'react';
import './App.css';
import { GlobalStyle } from "./styles/containerStyles"
import FunctionDiv from "./components/FunctionDiv"
import AboutPage from "./components/AboutPage"
import ContactPage from "./components/ContactPage"
import PageMat from "./components/PageMat"
import PageBio from "./components/PageBio"
import PageNrg from "./components/PageNrg"
import PageShare from "./components/PageShare"
import PagePio from "./components/PagePio"
import { Route } from "react-router-dom";

// Home page
const Home = () => (
  <FunctionDiv></FunctionDiv>
);

// About page
const About = () => (
  <AboutPage></AboutPage>
);

// Contact page
const Contact = () => (
  <ContactPage></ContactPage>
);

// Material cycles page
const Page1 = () => (
  <PageMat></PageMat>
);

// Bioeconomy page
const Page2 = () => (
  <PageBio></PageBio>
);

// Energy page
const Page3 = () => (
  <PageNrg></PageNrg>
);

// Sharing economy page
const Page4 = () => (
  <PageShare></PageShare>
);

// Advancement page
const Page5 = () => (
  <PagePio></PagePio>
);

function App() {

  return (
    
    <div className="App">
      <GlobalStyle />
      <Route exact={true} path="/" component={Home} />
      <Route exact={true} path="/About" component={About} />
      <Route exact={true} path="/Contact" component={Contact} />
      <Route exact={true} path="/Page1" component={Page1} />
      <Route exact={true} path="/Page2" component={Page2} />
      <Route exact={true} path="/Page3" component={Page3} />
      <Route exact={true} path="/Page4" component={Page4} />
      <Route exact={true} path="/Page5" component={Page5} />
    </div>
  );
}

export default App;
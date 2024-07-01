import React from "react";
import Header from "./Templetes/Header";
import Footer from "./Templetes/Footer";
import Blogs from "./Templetes/Blogs";
import Contact from "./Templetes/Contact";
import Body from "./Templetes/Body";
import UbuntuBlog from "./Templetes/UbuntuBlog";
import GccInstall from "./Templetes/GccInstall";
import Cprog from "./Templetes/Cprog";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Header title="CODEZILLA"/> 
        <Routes>
          <Route exact path="/" element={<Body/>}/>
          <Route exact path="/learn-c-programming" element={<Cprog/>}/>
          <Route exact path="/blogs" element={<Blogs/>}/>
              <Route exact path="/blogs/ubuntu" element={<UbuntuBlog/>}/>
              <Route exact path="/blogs/gcc-compiler" element={<GccInstall/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

import React from 'react'
import { useEffect } from 'react'
import coding from '../Static/Images/coding3.jpeg'
import smcoding from '../Static/Images/smcodeing2.jpeg'
import office from '../Static/Images/officelogo.png'
import word from '../Static/Images/word.png'
import excel from '../Static/Images/excel.png'
import powerpoint from '../Static/Images/powerpoint.png'
import access from '../Static/Images/access.png'
import outlook from '../Static/Images/outlook.png'
import { Link } from 'react-router-dom'

export default function Body() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className="container-expand bg-secondary-subtle py-3">
        <div className="container text-center">
         <p className="text-center fs-1 mb-2 fw-bold">Welcome to CodeZilla</p>
         <h5>CodeZilla are the solution of many questions which are mostly search on internet and real life coding career.</h5>
          <div className="container text-center d-xl-none d-lg-none">
             <Link to="/contact" className="btn btn-danger btn-sm mx-2">Contact Us</Link>
             <Link to="/blogs" className="btn btn-primary btn-sm mx-2">Blogs</Link>
          </div>
       </div>
      </div>
      <div className="container-expand d-lg-none d-md-none">
        <img src={smcoding} className="img-fluid rounded-none mx-auto d-block " alt="CodingImage"/>
      </div>
      <div className="container-expand d-none d-md-block d-lg-block">
         <img src={coding} className="img-fluid rounded-none mx-auto d-block " alt="CodingImage"/>
      </div>
      <div className="container mt-4">
        <h3 className="my-4 text-decoration-underline">Recommended Languages :</h3>
        <div className="container-expand text-center">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3 g-lg-3">
                <div className="col">
                  <div className="p-3 bg-dark text-light rounded-3">
                    <h3 className="fw-bold text-center text-warning">C Programming</h3>
                    <div className="container">
                      <p className="text-justify">{'C is a general-purpose computer programming language for system administration, network programming, and embedded software.'.slice(0,100)}</p>
                    </div>
                    <Link to="/learn-c-programming" className="btn btn-sm btn-light text-dark fw-bold rounded-5 my-3 focus-ring">View Blog {'>>'}</Link>
                  </div>
                </div>
                <div className="col">
                 <div className="p-3 bg-dark text-light rounded-3">
                    <h3 className="fw-bold text-center text-warning">C++ Programming</h3>
                    <div className="container">
                      <p className="text-justify">{'C++ is used in developing browsers, operating systems, and applications, as well as in-game programming, software engineering, data structures, etc.'.slice(0,103)}</p>
                    </div>
                    <Link to="/" className="btn btn-sm btn-light text-dark fw-bold rounded-5 my-3 focus-ring">View Blog {'>>'}</Link>
                  </div>
                </div>
                <div className="col">
                <div className="p-3 bg-dark text-light rounded-3">
                    <h3 className="fw-bold text-center text-warning">Python</h3>
                    <div className="container">
                      <p className="text-justify">{'Python has become one of the most popular programming languages in the world in recent years. Its used in everything from machine'.slice(0,110)}</p>
                    </div>
                    <Link to="/" className="btn btn-sm btn-light text-dark fw-bold rounded-5 my-3 focus-ring">View Blog {'>>'} </Link>
                  </div>
                </div>
                <div className="col">
                <div className="p-3 bg-dark text-light rounded-3">
                    <h3 className="fw-bold text-center text-warning">Javascript</h3>
                    <div className="container">
                      <p className="text-justify">{'JavaScript is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive.'.slice(0,102)}</p>
                    </div>
                    <Link to="/" className="btn btn-sm btn-light text-dark fw-bold rounded-5 my-3 focus-ring">View Blog {'>>'} </Link>
                  </div>
                </div>
                <div className="col">
                <div className="p-3 bg-dark text-light rounded-3">
                    <h3 className="fw-bold text-center text-warning">PHP</h3>
                    <div className="container">
                      <p className="text-justify">{'PHP is a general-purpose scripting language geared towards web dev- elopment. It was originally created by Danish-Canadian '.slice(0,103)}</p>
                    </div>
                    <Link to="/" className="btn btn-sm btn-light text-dark fw-bold rounded-5 my-3 focus-ring">View Blog {'>>'}</Link>
                  </div>
                </div>
                <div className="col">
                <div className="p-3 bg-dark text-light rounded-3">
                    <h3 className="fw-bold text-center text-warning">JAVA</h3>
                    <div className="container">
                      <p className="text-justify">{'Java is a high-level, className-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.'.slice(0,102)}</p>
                    </div>
                    <Link to="/" className="btn btn-sm btn-light text-dark fw-bold rounded-5 my-3 focus-ring">View Blog {'>>'} </Link>
                  </div>
                </div>
              </div>
            </div>
      </div>
      <div className="container-expand bg-secondary-subtle mt-4">
        <div className="container p-3">
           <p className="fs-2 fw-semibold">What is programming?</p>
           <div className="contianer">
           <ul className="fs-5 text-justify">
             <li>Programming is the process of creating a set of instructions that tell a computer how to perform a task.</li>
             <li>Programming is an exercise or practice that boost our logical thinking and improves a problem-solving skill.     
              <li>In computer science fields, the word program characterizes what a computer actually does and this process is known as programming.</li>                                                                                                                                                                                                                                                                                                                                                                     </li>
              <li>The term programming as it is the process that models or structure the set of instructions that instruct the machine how to perform a task and what to perform. It can be done using a variety of programming languages such as C, C++, C#, Python, Java, etc.</li>
           </ul>
           </div>
        </div>
      </div>
      <div className="container-fluid bg-black d-lg-none d-md-none">
        <div className="container p-3">                                   
         <strong className="fs-1 text-light">Motivate by this code:</strong>
         <div className="container mt-4">
          <span className="fs-1 fw-bold" style={{color:'orange'}}>while</span>
          <span className="fs-1 fw-bold" style={{color:'white'}}>(noSuccess)</span><br />
          <span className="fs-1 text-light">{'{'}</span><br />
          {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
          <span className="fs-1 text-light ms-5 fw-bold">tryAgain();</span><br />
          <span className="fs-1 ms-5 fw-bold" style={{color:'orange'}}>if</span>
          <span className="fs-1 fw-bold text-light">(Dead)</span><br />
          <span className="fs-1 fw-bold" style={{color:'orange',marginLeft:'120px'}}>break;</span><br />
          <span className="fs-1 text-light">{'}'}</span><br />
         </div>
        </div>
      </div>
      <div className="container">
         <div className="container py-4 " style={{display:'flex'}}>
            <img src={office} height={70} width={50} alt="Office Logo" />&nbsp;&nbsp;
            <p className="p-0" style={{color:' #f53501',fontSize:'3rem'}}>Microsoft Office : </p>
         </div>  
         <div className="container">
            <div className="card mb-3">
                <div className="row row-cols-1 row-cols-sm-2 row-clos-lg-2 row-cols-md-2 g-0">
                    <div className="col-md-2">
                        <img src={word} className="img-fluid" alt="Word logo"/>
                    </div>
                    <div className="col-md-10">
                       <div className="card-body">
                          <h4 className="card-title" style={{color:'#3c48ac'}}>Microsoft Word</h4>
                          <p className="card-text">MS Word enables users to do write-ups, create documents, resumes, contracts, format and edit your files and documents.</p>
                          <Link to="/blogs">Read more</Link>
                        </div>
                    </div>
                </div>
             </div>
             <div className="card mb-3">
                <div className="row row-cols-1 row-cols-sm-2 row-clos-lg-2 row-cols-md-2 g-0">
                    <div className="col-md-2">
                        <img src={excel} className="img-fluid" alt="Word logo"/>
                    </div>
                    <div className="col-md-10">
                       <div className="card-body">
                          <h4 className="card-title" style={{color:'#3c48ac'}}>Microsoft Excel</h4>
                          <p className="card-text">Excel is a spreadsheet program from Microsoft and a component of its Office product group for business applications.</p>
                          <Link to="/blogs">Read more</Link>
                        </div>
                    </div>
                </div>
             </div>
             <div className="card mb-3">
                <div className="row row-cols-1 row-cols-sm-2 row-clos-lg-2 row-cols-md-2 g-0">
                    <div className="col-md-2">
                        <img src={powerpoint} className="img-fluid" alt="Word logo"/>
                    </div>
                    <div className="col-md-10">
                       <div className="card-body">
                          <h4 className="card-title" style={{color:'#3c48ac'}}>Microsoft Powerpoint</h4>
                          <p className="card-text">Microsoft PowerPoint is useful in Creating Presentation, where one can add animation, photos, videos, and sound effects.</p>
                          <Link to="/blogs">Read more</Link>
                        </div>
                    </div>
                </div>
             </div>
             <div className="card mb-3">
                <div className="row row-cols-1 row-cols-sm-2 row-clos-lg-2 row-cols-md-2 g-0">
                    <div className="col-md-2">
                        <img src={access} className="img-fluid" alt="Word logo"/>
                    </div>
                    <div className="col-md-10">
                       <div className="card-body">
                          <h4 className="card-title" style={{color:'#3c48ac'}}>Microsoft Access</h4>
                          <p className="card-text">MS Access is used to store large amounts of data in an organized and efficient manner. It allows you to create tables to manage your data.</p>
                          <Link to="/blogs">Read more</Link>
                        </div>
                    </div>
                </div>
             </div>
             <div className="card mb-3">
                <div className="row row-cols-1 row-cols-sm-2 row-clos-lg-2 row-cols-md-2 g-0">
                    <div className="col-md-2">
                        <img src={outlook} className="img-fluid" alt="Word logo"/>
                    </div>
                    <div className="col-md-10">
                       <div className="card-body">
                          <h4 className="card-title" style={{color:'#3c48ac'}}>Microsoft Outlook</h4>
                          <p className="card-text">Outlook allows you to send and receive email messages, manage your calendar, store names and numbers of your contacts, and track your tasks.</p>
                          <Link to="/blogs">Read more</Link>
                        </div>
                    </div>
                </div>
             </div>
         </div>
      </div>
    </>
  )
}                                                                                                                                     

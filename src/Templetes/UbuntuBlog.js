import React from 'react'

export default function UbuntuBlog() {

 const componentDidMount = ()=>{
    window.scrollTo(0, 0);
    }
  componentDidMount()

  return (
    <div className="container-fluid " style={{minHeight:'100vh'}}>
        <h2 className="text-center text-dark" style={{fontFamily:'Times New Roman',fontSize:'50px'}}>How to install Ubuntu</h2>
        <div className="container mt-4">
           <p>Lets you are see how to installing the Ubuntu 20.04 LTS on your pc in dual boot </p>
        </div>
    </div>
  )
}

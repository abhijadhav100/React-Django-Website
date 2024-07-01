import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Blogs() {
 
   useEffect(() => {
    window.scrollTo(0, 0)
   }, [])
   
  return (
    <div className="container py-4" style={{minHeight:'100vh'}}>
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">How to install Ubuntu 20.04 on PC</h5>
          <p className="card-text">Install LTS Ubuntu Operating System on PC making Dual boot</p>
          <Link to="/blogs/ubuntu" className="btn btn-primary btn-sm">View Blog</Link>
        </div>
      </div>
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">Install GCC Compiler on Ubuntu</h5>
          <p className="card-text">GCC compiler use for run c programming code on linux OS</p>
          <Link to="/blogs/gcc-compiler" className="btn btn-primary btn-sm">View Blog</Link>
        </div>
      </div>
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">How to create partion of HDD</h5>
          <p className="card-text">Create multiple partion of HDD and divide single storage into multiple component.</p>
          <Link to="/blogs/gcc-compiler" className="btn btn-primary btn-sm">View Blog</Link>
        </div>
      </div>
      
    </div>
  )
}

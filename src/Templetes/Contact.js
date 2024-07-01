import React from 'react'
import { useState , useEffect} from 'react'
import axios from "axios"; 
import contact from '../Static/Images/contact.jpeg'

export default function Contact() {
 
  useEffect(() => {
     window.scrollTo(0, 0)
  }, [])

  const studname = React.useRef(null);
  const email = React.useRef(null);
  const [student, setStudent] = useState({studname:"",email:""})
  const [data, setData] = useState()

  const handleChange = (e)=>{
    setStudent({...student,[e.target.name]:e.target.value})
  }


 const handelSubmit = (e)=>{
  e.preventDefault();
  if(studname.current.value==="" || email.current.value==="")
  {
    setData(0)
    console.log(data)
     setTimeout(() => {
       setData()
     },5000);   
  }
  else{
  axios.post("http://127.0.0.1:8000/api/students/",student)
  .then(()=>{
    setData(1)
    setTimeout(() => {
      setData()
    }, 5000);
    setStudent({studname:"",email:""})
  })
  .catch((err)=>{console.log(err);
    setData(0)
    setTimeout(() => {
      setData()
    }, 5000);
   })
  }
 }
  const alertBar = () =>{
    if(data===0)
       {return (
        <div class="alert alert-danger" role="alert">
           Student Name and Email are required. <strong>PLEASE ENTER VALID DATA.....!</strong>
        </div>
       )}
    else if(data===1){
      return(
        <div class="alert alert-success" role="alert">
           <strong>Data add Successfully...!</strong>
        </div>
      )}
      else{
        return
      }
    }
  

  return (
    <div style={{minHeight:'100vh'}}>
        <div className="container-expand">
            <img src={contact} class="img-fluid rounded-none mx-auto d-block " alt="CodingImage"/>
          </div>
        <div className="container py-2">
          {alertBar()}
          <p className="text-center fs-3 text-bold">Contact</p>
          <form> 
            <div className="mb-3" >
                <label htmlFor="studentName" className="form-label">Student Name</label>
                <input type="text" className="form-control" onChange={handleChange} value={student.studname} id="studentName" ref={studname} name="studname" required/>
            </div>
            <div className="mb-2" >
                <label htmlFor="emailId" className="form-label">Email address</label>
                <input type="email" className="form-control" onChange={handleChange} value={student.email} id="emailId" ref={email} name="email" required/>
            </div>
            <div className="container text-center">
              <button type="submit" className="btn btn-primary btn-sm " onClick={handelSubmit}>Submit</button>
            </div>
          </form>
        </div>
    </div>
  )
}


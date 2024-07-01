import React from "react";
import axios from "axios";
import { useState, useEffect } from 'react';

export default function StudentData() {

    const [student, setStudent] = useState([])

    useEffect(()=>{
      async function getAllStudent(){
        try {
          const students = await axios.get("http://127.0.0.1:8000/api/students/")
          setStudent(students.data)
        } catch (error) {
           console.log(error)
        }
      }
      getAllStudent()
    },[])

if (student[0]!=null) {
  return (
    <>
      <div className="container ">
        <div className="container overflow-x-hidden">
          <table className="table table-hover">
            <thead>
              <tr className="row">
                <th className="col-4 fs-6">ID</th>
                <th className="col-4 fs-6">Student Name</th>
                <th className="col-4 fs-6">Email</th>
              </tr>
            </thead>
            <tbody>
              {student.map((student, i) => {
                return (
                  <tr className="row" key={i}>
                    <td className="col-4 fs-6">{student.id}</td>
                    <td className="col-4 fs-6">{student.studname}</td>
                    <td className="col-4 fs-6 ">{student.email}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
else{
  return(
    <>
    <div className="container">
        <h2 className=" border border-dark-subtle text-center">No Data Availabe in Database...!</h2>
    </div>
    </>
    
  )
}
}
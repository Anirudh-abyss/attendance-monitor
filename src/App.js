import React from "react";
import { useState, useEffect } from "react";
import SubjectForm from "./component/SubjectForm";
import SubjectList from "./component/SubjectList";



function App(){
    const[subjects,setSubjects] = useState([]);


useEffect(()=>{
    const stored =localStorage.getItem("subjects");

    if(stored){
        setSubjects(JSON.parse(stored));
        }
},[]);



useEffect(()=>{
    localStorage.setItem("subjects",JSON.stringify(subjects));
},[subjects]);


const addSubject=(name)=>{
    setSubjects([
        ...subjects,
        {id:Date.now(),name,present:0,total:0}
    ])
};


const markAttendance = (id, status) => {
  setSubjects(
    subjects.map(sub => {
      if (sub.id === id) {
        let updatedSub = { ...sub, total: sub.total + 1 };

        if (status === "present") {
          updatedSub.present = sub.present + 1;
        }

        return updatedSub;
      }
      return sub;
    })
  );
};

const resetAttendance = (id) => {
  setSubjects(
    subjects.map(sub => {
      if (sub.id === id) {
        return { ...sub, present: 0, total: 0 };
      } else {
        return sub;
      }
    })
  );
};

const deleteSubject = (id) => {
    setSubjects(subjects.filter((sub) => sub.id !== id));
};

  return (
      <div className="container mt-5">
      <div className="d-flex align-items-center mb-0">
        <img
          src="https://www.lystloc.com/blog/wp-content/uploads/2024/09/attendance-management-features.webp" 
          alt="Attendance Tracker Logo"
          className="img-fluid rounded me-3"
          style={{ width: "50px", height: "50px" }}
        />
      <h2> Personal Attendance Monitor</h2>
      </div>
      <SubjectForm addSubject={addSubject} />
      <SubjectList
        subjects={subjects}
        markAttendance={markAttendance}
        resetAttendance={resetAttendance}
        deleteSubject={deleteSubject}></SubjectList>
    </div>
  );
}

export default App;
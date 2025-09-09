import React from "react";

function SubjectList({ subjects, markAttendance, resetAttendance, deleteSubject }) {
  if (subjects.length === 0) {
    return <p className="text-muted">No subjects added yet.</p>;
  }
    return (
    <div className="list-group">
      {subjects.map((sub) => {
        const percentage =
          sub.total === 0 ? 0 : Math.round((sub.present / sub.total) * 100);

        return (
          <div
            key={sub.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <h5>{sub.name}</h5>
              <p className="mb-1">
                ✅ {sub.present} / {sub.total} ({percentage}%)
              </p>
            </div>

            <div className="btn-group">
              <button
                className="btn btn-success btn-sm"
                onClick={() => markAttendance(sub.id, "present")}
              >
                Present
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => markAttendance(sub.id, "absent")}
              >
                Absent
              </button>
              <button

// pop up warning for reset and delete
                   className="btn btn-warning btn-sm"
              onClick={() => {
              if (window.confirm("Are you sure you want to reset attendance for this subject?")) {
               resetAttendance(sub.id);
    }
  }}
>
  Reset
</button>

<button
  className="btn btn-outline-dark btn-sm"
  onClick={() => {
    if (window.confirm("Are you sure you want to delete this subject?")) {
      deleteSubject(sub.id);
    }
  }}
>
  Delete
</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SubjectList;
import React from 'react';

function Grade(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.course}</td>
      <td>{props.grade}</td>
      <td><button className='btn btn-danger'>Delete</button></td>
    </tr>
  );
}

function GradeTable(props) {
  return (
    <table className='table table-bordered table-striped'>
      <thead className='thead-dark'>
        <th>Student Name</th>
        <th>Course</th>
        <th>Grade</th>
        <th>Operations</th>
      </thead>
      <tbody>
        {
          props.grades.map(grades => {
            return (
              <Grade
                key={grades.id}
                name={grades.name}
                course={grades.course}
                grade={grades.grade}
              />
            );
          })
        }
      </tbody>
    </table>
  );
}

export default GradeTable;

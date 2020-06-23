import React from "react";

const Table = ({ students, subjects }) => {
  return (
    <div className="container1">
      {
        <table id="tabulation" className="responsive-table" key="f">
          <thead key="g">
            <tr key="h">
              <th key="name">Name</th>
              <th key="roll">Roll</th>
              {subjects.map((subject, index) => {
                return (
                  <React.Fragment key={index}>
                    <th key={subject.SubjectName}>{subject.SubjectName}</th>
                    <th key="MCQ">MCQ</th>
                    <th key="Practical">Practical</th>
                    <th key="Total">Total</th>
                    <th key="Grade Points">Grade Points</th>
                  </React.Fragment>
                );
              })}
              <th key="Total Marks">Total Marks</th>
              <th key="GPA">GPA</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => {
              return (
                <tr key={student.Roll}>
                  <th key="1">{student.Name}</th>
                  <td data-title="Roll" key="2">
                    {student.Roll}
                  </td>
                  {subjects.map((subject, index) => {
                    return (
                      <React.Fragment key={index}>
                        <td
                          data-title={subject.SubjectName}
                          className="subject"
                          key={index}
                        >
                          {student[`Sub${index + 1}`]}
                        </td>
                        <td
                          data-title="MCQ"
                          data-mcq={subject.SubjectName}
                          key="a"
                        >
                          {student[`MCQ${index + 1}`]}
                        </td>
                        <td data-title="Practical" key="b">
                          {student[`Practical${index + 1}`]}
                        </td>
                        <td data-title="Total" key="z">
                          {student[`Total${index + 1}`]}
                        </td>
                        <td data-title="Grade Points" key="c">
                          {student[`GradePoints${index + 1}`]}
                        </td>
                      </React.Fragment>
                    );
                  })}
                  <td data-title="Total Marks" key="d">
                    {student.TotalMarks}
                  </td>
                  <td data-title="GPA" key="e">
                    {student.GPA}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      }
    </div>
  );
};

export default React.memo(Table);

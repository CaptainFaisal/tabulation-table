import $ from "jquery";
const condition = (subjects, setLoading) => {
  setLoading(true);
  const rows = $("tbody tr");
  const subject = (i, ii) => {
    return $("tbody tr .subject")[i * subjects.length + ii];
  };
  const mcq = (i, ii) => {
    return $("[data-title='MCQ']")[i * subjects.length + ii];
  };
  const practical = (i, ii) => {
    return [...rows[i].children].filter(
      (mcq) => mcq.getAttribute("data-title") === "Practical"
    )[ii];
  };
  const fail = (elem) => {
    elem.style.backgroundColor = "red";
    elem.style.color = "#fff";
  };
  const markNameRollGPAOfFailedStudents = (i) => {
    fail(rows[i].children[0]);
    fail(rows[i].children[1]);
    fail(rows[i].children[rows[i].children.length - 1]);
    rows[i].children[rows[i].children.length - 1].innerText = "F";
  };
  for (let i = 0; i < rows.length; i++) {
    for (let ii = 0; ii < subjects.length; ii++) {
      if (
        parseFloat(subject(i, ii).innerHTML) > 0 &&
        parseFloat(mcq(i, ii).innerHTML) > 0
      ) {
        if (
          parseFloat(subject(i, ii).innerText) < 33 && //subject
          subjects[ii] !== "Subject-2" &&
          subjects[ii] !== "Subject-3"
        ) {
          fail(subject(i, ii));
          markNameRollGPAOfFailedStudents(i);
        } else if (
          parseFloat(subject(i, ii).innerText) < 33 //another subject
        ) {
          fail(subject(i, ii));
          markNameRollGPAOfFailedStudents(i);
        }
        if (
          parseFloat(mcq(i, ii).innerText) < 10 && //mcq
          subjects[ii] !== "Subject-2" &&
          subjects[ii] !== "Subject-3"
        ) {
          fail(mcq(i, ii));
          markNameRollGPAOfFailedStudents(i);
        } else if (
          parseFloat(mcq(i, ii).innerText) < 10 //another mcq
        ) {
          fail(mcq(i, ii));
          markNameRollGPAOfFailedStudents(i);
        }
      }
      if (parseFloat(practical(i, ii).innerHTML) === 0) {
        practical(i, ii).innerText = "NULL";
      }
      if (parseFloat(mcq(i, ii).innerHTML) === 0) {
        mcq(i, ii).innerText = "NULL";
      }
    }
  }
  setLoading(false);
};
export default condition;

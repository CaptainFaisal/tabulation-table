import React, { useState, useEffect, useReducer, useRef } from "react";
import TableToExcel from "react-html-table-to-excel";
import Table from "./table";
import PaginatorBar from "./paginatorBar";
import PageLimit from "./limit";
import SearchBox from "./searchBox";
import Loader from "./loader";
import axios from "axios";
import condition from "./js/condition";
import fail from "./js/Fail";
import page from "./js/paginator";
import ToggleTheme from "./ToggleTheme";
import toggleTheme from "./js/ToggleTheme";
import "bootstrap/dist/css/bootstrap.css";
import "./css/table.css";
import "./css/loader.css";
import "./css/paginator.css";
import "./css/ToggleTheme.css";
import "./css/dark.css";
import "./css/search.css";
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { students: action.payload };
    case "SEARCH":
      return { students: action.payload };
    default:
      throw new Error("Unknown action type");
  }
};
const NavBar = ({
  match: {
    params: { grade, section, gender },
  },
}) => {
  const [state, dispatch] = useReducer(reducer, { students: [] });
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [studentsPerPage, setStudentsPerPage] = useState(10);
  const studentRef = useRef();
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const URLs = [
        `http://localhost:5000/students/${grade}/${section}/${gender}`,
        "http://localhost:5000/subjects",
      ];
      const responses = [];
      for (let url of URLs) {
        const res = await axios.get(url);
        responses.push(res.data);
      }
      dispatch({ type: "FETCH_SUCCESS", payload: responses[0] });
      studentRef.current = responses[0];
      setSubjects(responses[1]);
      setLoading(false);
    };
    fetchData();
  }, [grade, section, gender]);
  useEffect(() => {
    if (!loading) {
      condition(
        [
          ...subjects.map((subject) => {
            return subject.SubjectName;
          }),
        ],
        setLoading
      );
      page();
      fail();
      toggleTheme();
    }
  });

  const handleSearch = (roll) => {
    roll
      ? dispatch({
          type: "SEARCH",
          payload: studentRef.current.filter(
            (student) => parseFloat(student.Roll) === roll
          ),
        })
      : dispatch({ type: "FETCH_SUCCESS", payload: studentRef.current });
  };
  const handlePaginate = (pageNumber) => setCurrentPage(pageNumber);
  const handleLimit = (limit) => {
    setStudentsPerPage(limit);
  };
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  let currentStudents = state.students.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );
  return (
    <React.Fragment>
      {loading ? (
        <Loader />
      ) : (
        <React.Fragment>
          <nav className="navbar navbar-dark bg-dark">
            <span className="navbar-brand mb-0 h1">
              Tamirul Millat Kamil Madrasah
            </span>
            <span className="badge badge-pill badge-success">
              Total
              <span className="badge badge-pill badge-light m-1">
                {studentRef.current.length}
              </span>
            </span>
            <span className="badge badge-pill m-1 badge-danger" id="badge-fail">
              Fail in current page
              <span
                className="badge badge-pill badge-light m-1"
                id="fail"
              ></span>
            </span>
            <PageLimit onLimit={handleLimit} students={state.students} />
            <ToggleTheme />
            <SearchBox onsearch={handleSearch} />
            <TableToExcel
              table="tabulation"
              filename="Tabulation"
              sheet="sheet 1"
              buttonText="Export as excel"
              className="btn btn-sm btn-primary m-2"
            />
          </nav>
          <div className="container">
            <Table students={currentStudents} subjects={subjects} />
            <PaginatorBar
              currentPage={currentPage}
              studentsPerPage={studentsPerPage}
              totalStudents={state.students.length}
              onPaginate={handlePaginate}
            />
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default NavBar;

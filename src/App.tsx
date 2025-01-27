import "./App.css";
import EmployeeCard from "./components/EmployeeCard";
import { useState } from "react";

const [employee, setFirstEmployee] = useState(null);

const sampleFirstEmployee = () => {
  // Send the request
  fetch("https://randomuser.me/api?nat=en")
    .then((response) => response.json())
    .then((data) => {
      setFirstEmployee(data.results[0]);
    });
};

// const sampleEmployee = {
//   name: {
//     first: "https://randomuser.me/api/?gender=female,?firstname=angela",
//     last: "https://randomuser.me/api/?gender=female,?lastname=dawson",
//   },
//   email: "https://randomuser.me/api/?email=angeladawson@gmail.com",
//   picture: {
//     medium: "https://randomuser.me/api/portraits/med/men/66.jpg",
//   },
// };

function App() {
  const [employee, setEmployee] = useState(sampleFirstEmployee);

  const getEmployee = () => {
    fetch("https://randomuser.me/api?nat=fr")
      .then((response) => response.json())
      .then((data) => {
        setEmployee(data.results[0]);
      });
  };

  return (
    <div className="App">
      <EmployeeCard employee={employee} />
      <button type="button" onClick={getEmployee}>
        Get employee
      </button>
    </div>
  );
}

export default App;

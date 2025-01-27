import "./App.css";
import EmployeeCard from "./components/EmployeeCard";
import { useState } from "react";


// const fetchRandomEmployee = async () => {
//   const response = await fetch("https://randomuser.me/api?nat=fr&inc=name,email,picture");
//   const data = await response.json();
//   return data.results[0];
// };



const sampleEmployee = {
  name: {
    first: "https://randomuser.me/api/?inc=name",
    last: "https://randomuser.me/api/?inc=name",
  },
  email: "https://randomuser.me/api/?inc=email",
  picture: {
    medium: "https://randomuser.me/api/portraits/med/men/66.jpg",
  },
};

function App() {
  const [employee, setEmployee] = useState(sampleEmployee);

  const getEmployee = () => {
    fetch("https://randomuser.me/api?nat=fr")
      .then((response) => response.json())
      .then((data) => {
        setEmployee(data.results[0]);
      });
  };

  return (
    <div className='App'>
      <EmployeeCard employee={employee} />
      <button type="button" onClick={getEmployee}>Get employee</button>
    </div>
  );
}

export default App;

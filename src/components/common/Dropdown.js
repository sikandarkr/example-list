import React from "react";
import Select from "react-select";
import "../common/styles/dropdown.css";
const techCompanies = [
  { label: "Apple", value: 1 },
  { label: "Facebook", value: 2 },
  { label: "Netflix", value: 3 },
  { label: "Tesla", value: 4 },
  { label: "Amazon", value: 5 },
  { label: "Alphabet", value: 6 }
];
class Dropdown extends React.Component {
  render() {
    return <Select options={techCompanies} placeholder="Mehrfachaktion"/>;
  }
}
export default Dropdown;

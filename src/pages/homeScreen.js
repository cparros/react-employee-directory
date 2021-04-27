import React, { Component } from "react";
import API from "../Utils/API";
import Header from "../components/Header";
import FilterButtons from "../components/FilterButtons";
import EmployeeData from "../components/EmployeeData";

class HomeScreen extends Component {
  state = {
    employees: [],
    sorted: "ascending",
    filter: ''
  };

  componentDidMount() {
    API.employees().then((res) => {
      console.log(res.data.results);
      this.setState({
        employees: res.data.results,
        sorted: "ascending",
       
      });
    });
  }

  handleSort = () => {
    if (this.state.sorted === "ascending") {
      const sortedWorkers = this.state.employees.sort((a, b) => {
        return a.name.last.localeCompare(b.name.last);
      });
      this.setState({ employees: sortedWorkers, sorted: "descending" });
    } else {
      const sortedWorkers = this.state.employees.sort((a, b) => {
        return b.name.last.localeCompare(a.name.last);
      });
      this.setState({ employees: sortedWorkers, sorted: "ascending" });
    }
  };



  handleGender = () => {
   const male = []
   const female = []
    if (this.state.employees.length) {
      this.state.employees.map((employee) => {
        if(employee.gender === 'male'){
          console.log(employee)
          
          male.push(employee)
        }
      })
      this.setState({ filter: 'male', employees: male })
    }
   
   
  };

  render() {
    return (
      <div>
        <Header />
        <FilterButtons handleSort={this.handleSort} handleGender={this.handleGender}/>
        <EmployeeData
          employees={this.state.employees}
        />
      </div>
    );
  }
}

export default HomeScreen;

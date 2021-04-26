import React, { Component } from 'react';
import API from '../Utils/API'
import Header from '../components/Header'
import FilterButtons from '../components/FilterButtons'
import EmployeeData from '../components/EmployeeData'

class HomeScreen extends Component {
  state = {
    employees: [],
    sorted: 'ascending'
  }

  componentDidMount() {
    API.employees().then((res) => {
      this.setState({
        employees: res.data.results,
      })
    })
  }

  render () {
    return (
      <div>
        <Header />
        <FilterButtons />
        <EmployeeData employees={this.state.employees}/>
      </div>
    )
  }

}

export default HomeScreen
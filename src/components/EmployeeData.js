import React from 'react'

const EmployeeData = (props) => {


  return (
    <table
      className="table table-light table-bordered table-sm"
      cellSpacing="0"
      width="100%"
    >
      <thead>
        <tr>
          <th scope="col" className="th-sm"></th>
          <th scope="col" className="th-sm">
            First Name
          </th>
          <th scope="col" className="th-sm">
            Last Name <i className="fas fa-sort icon"></i>
          </th>
          <th scope="col" className="th-sm">
            Email
          </th>
          <th scope="col" className="th-sm">
            Phone Number
          </th>
        </tr>
      </thead>
      <tbody>
        {props.employees.length > 0 ? (
          props.employees.map((employee) => {
            return (
              <tr>
                <td>
                  <img src={employee.picture.large} alt="headshots" />
                </td>
                <td>{employee.name.first}</td>
                <td>{employee.name.last}</td>
                <td>{employee.email}</td>
                <td>{employee.cell}</td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td>
              <img src="" alt="" />
            </td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Email</td>
            <td>Phone Number</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default EmployeeData;


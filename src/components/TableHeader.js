import React from "react";

function TableHeader() {
  return (
    <div>
      <table id="employees">
      <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Phone</th>
            <th>DOB</th>
            <th>Nat</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableHeader;

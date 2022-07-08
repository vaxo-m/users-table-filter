import React, { useEffect, useState } from "react";
import { DataGridPro } from "@mui/x-data-grid-pro";
import TextField from "@mui/material/TextField";
import { columns } from "./columns";

import "./style.css";

function App() {
  const [usersData, setUsersData] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        setUsersData(json);
        setTableData(json);
      });
  }, []);

  useEffect(() => {
    usersData && filterValue
      ? setTableData(usersData.filter((row) => containsValue(row, filterValue)))
      : setTableData(usersData);
  }, [usersData, filterValue]);

  const predicate = (item, valueToMatch) =>
    typeof item === "string" && item.includes(valueToMatch);

  const containsValue = (row, value) =>
    Object.values(row).some((arrayItem) => {
      return typeof arrayItem === "object"
        ? containsValue(arrayItem, value)
        : predicate(arrayItem, value);
    });

  const handlechange = (e) => {
    setFilterValue(e.target.value);
  };

  return (
    <div>
      <div className="filter-wrapper">
        <TextField
          id="standard-basic"
          label="Filter"
          variant="standard"
          onChange={handlechange}
        />
      </div>
      <div className="table-wrapper">
        <DataGridPro
          rows={tableData}
          columns={columns}
          disableColumnFilter
          disableColumnMenu
          hideFooter
          rowHeight={75}
        />
      </div>
    </div>
  );
}

export default App;

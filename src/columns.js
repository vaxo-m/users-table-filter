export const columns = [
  { field: "name", headerName: "Name", width: 150 },
  { field: "username", headerName: "User Name", width: 100 },
  {
    field: "company",
    headerName: "Company",
    width: 350,
    renderCell: (params) => (
      <ul style={{ listStyle: "none", fontSize: "13px", padding: "0" }}>
        <li>
          <strong>Name: </strong>
          {params.value.name}
        </li>
        <li>
          <strong>Catch phrase: </strong>
          {params.value.catchPhrase}
        </li>
        <li>
          <strong>BS: </strong>
          {params.value.bs}
        </li>
      </ul>
    ),
  },
  {
    field: "address",
    headerName: "Address",
    width: 180,
    renderCell: (params) => (
      <ul style={{ listStyle: "none", fontSize: "13px", padding: "0" }}>
        <li>
          <strong>City: </strong>
          {params.value.city}
        </li>
        <li>
          <strong>Street: </strong>
          {params.value.street}
        </li>
        <li>
          <strong>Suite: </strong>
          {params.value.suite}
        </li>
        <li>
          <strong>Zip code: </strong>
          {params.value.zipcode}
        </li>
      </ul>
    ),
  },
  { field: "phone", headerName: "Phone", width: 150 },
  { field: "email", headerName: "Email", width: 150 },
  { field: "website", headerName: "Website", width: 150 },
];

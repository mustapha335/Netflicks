import React, { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./userList.scss";
import Delete from "@material-ui/icons/DeleteOutline";
import { Link } from "react-router-dom";
import { userRows } from "../../Data";

const UserList = () => {
  const [data, setData] = useState(userRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "username",
      headerName: "Username",
      width: 150,
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
      editable: true,
    },
    {
      field: "status",
      headerName: "Status",
      width: 130,
      editable: true,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 150,
      editable: true,
    },
    {
      field: "Action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>

            <Delete
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default UserList;

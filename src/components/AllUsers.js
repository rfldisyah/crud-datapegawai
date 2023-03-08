import {
  Button,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import { deleteUser, getUsers } from "../service/api";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const StyledSearch = styled(Paper)`
  width: 90%;
  margin: 50px auto 0 auto;
`;

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px auto 0 auto;
`;

const Thead = styled(TableRow)`
  background: #000;
  & > th {
    color: #fff;
    font-size: 20px;
  }
`;
const Tbody = styled(TableRow)`
  & > td {
    font-size: 17px;
  }
`;

const AllUsers = () => {
  const [search, setSearch] = useState("");

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    let response = await getUsers();
    console.log(response);
    setUsers(response.data);
  };

  const deleteUserData = async (id) => {
    alert("Data Berhasil Di Hapus");
    await deleteUser(id);
    getUserDetails();
  };

  return (
    <>
      <StyledSearch
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search"
          inputProps={{ "aria-label": "search data" }}
          onChange={(e) => setSearch(e.target.value)}
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </StyledSearch>
      <StyledTable>
        <TableHead>
          <Thead>
            <TableCell>ID</TableCell>
            <TableCell>Nama</TableCell>
            <TableCell>Alamat</TableCell>
            <TableCell>Provinsi</TableCell>
            <TableCell>Kota</TableCell>
            <TableCell>Kecamatan</TableCell>
            <TableCell></TableCell>
          </Thead>
        </TableHead>
        <TableBody>
          {users
            .filter((user) => {
              return search.toLowerCase() === ""
                ? user
                : user.nama.toLowerCase().includes(search);
            })
            .map((user) => (
              <Tbody>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.nama}</TableCell>
                <TableCell>{user.alamat}</TableCell>
                <TableCell>{user.provinsi}</TableCell>
                <TableCell>{user.kota}</TableCell>
                <TableCell>{user.kecamatan}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    size="small"
                    style={{ marginRight: 10, borderRadius: 10 }}
                    startIcon={<EditIcon />}
                    component={Link}
                    to={`/edit/${user.id}`}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    style={{ backgroundColor: "#DC143C", borderRadius: 10 }}
                    startIcon={<DeleteIcon />}
                    onClick={() => deleteUserData(user.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </Tbody>
            ))}
        </TableBody>
      </StyledTable>
    </>
  );
};

export default AllUsers;

import { Button, styled, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import { deleteUser,  getUsers } from "../service/api";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from "react-router-dom";



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
`
const Tbody = styled(TableRow)`
    & > td {
        font-size: 17px;
    }
`

const AllUsers = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUserDetails();

    }, [])

    const getUserDetails = async () => {
        let response = await getUsers();
        console.log(response);
        setUsers(response.data);
    }

    const deleteUserData = async (id) => {
        alert("Data Berhasil Di Hapus");
        await deleteUser(id);
        getUserDetails();
    }


    return (
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
                {
                    users.map(user => (
                        <Tbody>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.nama}</TableCell>
                            <TableCell>{user.alamat}</TableCell>
                            <TableCell>{user.provinsi}</TableCell>
                            <TableCell>{user.kota}</TableCell>
                            <TableCell>{user.kecamatan}</TableCell>
                            <TableCell>
                            <Button variant="contained" size="small" style={{marginRight: 10,  borderRadius: 10}} startIcon={<EditIcon />}  component={Link} to={`/edit/${user.id}`}>Edit</Button>
                            <Button variant="contained" size="small" style={{ backgroundColor: "#DC143C", borderRadius: 10 }} startIcon={<DeleteIcon />}  onClick={() => deleteUserData(user.id)}>Delete</Button>
                            </TableCell>
                        </Tbody>
                    ))
                }
            </TableBody>
        </StyledTable>
    )
}


export default AllUsers;
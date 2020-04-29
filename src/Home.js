import FormDialog from "./FormDialog";
import {Container} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import React, {useEffect, useState} from "react";
import Api from "./api";
import {Link} from "react-router-dom";

const Home = props => {
  const [users, setUsers] = useState([]);
  const [openModal, setOpenModal] = React.useState(false);
  useEffect(() => {
    Api.getUsers().then(res => setUsers(res));
  }, [])

  const handleClickOpen = () => {
    setOpenModal(true);
  };
  return (
    <div>
      <FormDialog open={openModal} onClose={setOpenModal}/>
      <Container className='container'>
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Open simple dialog
        </Button>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">ID</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Password</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map(user => (
                <TableRow key={user.id}>
                  <TableCell component="th" scope="row" align={"center"}>
                    <Link to={`/user/${user.id}`}>
                      {user.id}
                    </Link>
                  </TableCell>
                  <TableCell align="center">{user.name}</TableCell>
                  <TableCell align="center">{user.email}</TableCell>
                  <TableCell align="center">{user.password}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  )
}

export default Home;
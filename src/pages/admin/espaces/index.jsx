import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRedirectNotAdmin } from '../../../hooks/redirect-hook';
import { Box } from '@mui/system';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

const AdminEspaces = () => {
    // Redirect to home page if not connected as admin.
    useRedirectNotAdmin();

    const user = useSelector(state => state.user);

    const [espaces, setEspaces] = useState([]);

    // Get data from API.
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACK_URL}/api/espace`)
            .then(
                ({ data }) => { setEspaces(data.rows); }
            );
    }, []);

    // Table - Create data for MUI table.
    function createData(id, name) {
        return { id, name };
    }

    const rows = espaces.map(
        (espace) => createData(espace.id, espace.nom)
    );

    const itemDelete = (id) => {
        axios.delete(`${process.env.REACT_APP_BACK_URL}/api/espace/${id}`, {
            headers: { Authorization: `Bearer ${user.token}` }
        })
            .then(() => { setEspaces(espaces.filter(espace => espace.id !== id)); });
    };

    return (
        <>
            <h1>Espaces</h1>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{ backgroundColor: 'lightgrey' }}>
                            <TableCell width={50}>ID</TableCell>
                            <TableCell align="left">NOM</TableCell>
                            <TableCell align="left">ACTIONS</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                hover={true}
                            >
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="left">{row.name}</TableCell>
                                <TableCell align="left" width={275}>
                                    <Box sx={{ '& button': { mx: 1, textTransform: 'none' } }}>
                                        <Link to={'./' + row.id}>
                                            <Button variant="contained" size="small" color="warning">Modifier</Button>
                                        </Link>
                                        <Button variant="contained" size="small" startIcon={<DeleteIcon />} color="error" onClick={() => { itemDelete(row.id); }}>Supprimer</Button>
                                    </Box>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box sx={{ '& button': { my: 2, textTransform: 'none' } }}>
                <Link to={'./nouveau'}>
                    <Button variant="contained" size="small">Ajouter</Button>
                </Link>
            </Box>
        </>
    );
};

export default AdminEspaces;
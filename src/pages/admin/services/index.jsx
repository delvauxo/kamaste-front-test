import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from '@mui/system';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useRedirectNotAdmin } from '../../../hooks/redirect-hook';

const AdminServices = () => {

    // Redirect to home page if not connected as admin.
    useRedirectNotAdmin();

    // Get user info (token, admin status, id).
    const user = useSelector(state => state.user);

    const [services, setServices] = useState([]);

    // Get data from API.
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACK_URL}/api/body/service`)
            .then(
                ({ data }) => { setServices(data.rows); }
            );
    }, []);

    // Table - Create data for MUI table.
    function createData(id, nom) {
        return { id, nom };
    }

    // Delete function.
    const itemDelete = (id) => {
        axios.delete(`${process.env.REACT_APP_BACK_URL}/api/body/service/${id}`, {
            headers: { Authorization: `Bearer ${user.token}` }
        })
            // Reload services without the deleted item.
            .then(() => { setServices(() => services.filter(service => service.id !== id)); });
    };

    const rows = services.map(
        service => (createData(service.id, service.nom))
    );

    return (
        <>
            <h1>Services</h1>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{ backgroundColor: 'lightgrey' }}>
                            <TableCell width={50}>ID</TableCell>
                            <TableCell>NOM</TableCell>
                            <TableCell>ACTIONS</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            < TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                hover={true}
                            >
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell>{row.nom}</TableCell>
                                <TableCell width={250}>
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

export default AdminServices;
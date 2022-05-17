import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRedirectNotAdmin } from '../../../hooks/redirect-hook';
import { useSelector } from 'react-redux';

const AdminMoments = () => {
    // Redirect to home page if not connected as admin.
    useRedirectNotAdmin();

    const user = useSelector(state => state.user);
    const [moments, setMoments] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACK_URL}/api/body/moment`)
            .then(
                ({ data }) => { setMoments(data.rows); }
            );
    }, []);

    const itemDelete = (id) => {
        console.log(id);
        axios.delete(`${process.env.REACT_APP_BACK_URL}/api/body/moment/${id}`, {
            headers: { Authorization: `Bearer ${user.token}` }
        })
            .then(() => setMoments(moments.filter(moment => moment.id !== id)));
    };

    // Table - Create data for MUI table.
    function createData(id, name) {
        return { id, name };
    }

    const rows = moments.map(
        moment => createData(moment.id, moment.nom)
    );

    return (
        <>
            <h1>Moments</h1>
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
        </>);
};

export default AdminMoments;
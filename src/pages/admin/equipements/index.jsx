import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from '@mui/system';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useRedirectNotAdmin } from '../../../hooks/redirect-hook';

const AdminEquipements = () => {
    // Redirect to home page if not connected as admin.
    useRedirectNotAdmin();

    const user = useSelector(state => state.user);
    const [equipements, setEquipements] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACK_URL}/api/body/equipement`)
            .then(
                ({ data }) => { setEquipements(data.result.rows); }
            );
    }, []);

    function createData(id, nom) {
        return { id, nom };
    }

    const rows = equipements.map(
        equipement => createData(equipement.id, equipement.nom)
    );

    const itemDelete = (id) => {
        axios.delete(`${process.env.REACT_APP_BACK_URL}/api/body/equipement/${id}`, {
            headers: { Authorization: `Bearer ${user.token}` }
        })
            .then(() => { setEquipements(equipements.filter(equipement => equipement.id !== id)); });
    };

    return (
        <>
            <h1>Équipements</h1>
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

export default AdminEquipements;
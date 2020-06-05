import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import api from './api';

import Button from '@material-ui/core/Button';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import CircularProgress from '@material-ui/core/CircularProgress';

function App() {

    const [lista, setLista] = useState([]);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        api.get('/modelos').then((response) => {
            const itens = response.data;
            setLista(itens);
            setLoading(false);
        })
    }, [])

    return (
        <>
            { loading ? <CircularProgress />: <div/> }
            <Table>
                <TableBody>
                {lista.map(item => (
                    <TableRow key={item.id}>
                        <TableCell>{item.id}</TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>
                            <input type="checkbox" checked={item.done} />
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            <br>
            </br>
            <Link to="/create">Adicionar</Link>
            <Button variant="contained" color="primary">
                Primary
            </Button>
        </>
    );
}

export default App;

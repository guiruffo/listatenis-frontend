import React, {useState, useEffect} from 'react';

import api from './api';

function App() {

    const [lista, setLista] = useState([]);

    useEffect(() => {
        api.get('/modelos').then((response) => {
            const itens = response.data;
            setLista(itens);
        })
    }, [])

    return (
        <table>
            {lista.map(item => (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>
                        <input type="checkbox" checked={item.done}/>
                    </td>
                </tr>
            ))}
        
        </table>
    );
}

export default App;

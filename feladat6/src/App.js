import 'bootstrap/scss/bootstrap.scss'
import './App.scss'
import { useEffect, useState } from 'react'
import loading from './feladat6-loading.gif'

function App() {
    const [konyvek, setKonyvek] = useState(null)

    useEffect(() => {
        fetch('http://localhost:4000/konyvek')
            .then(data => data.json())
            .then(json => setKonyvek(json))
            .catch(console.log)
    }, [])

if (!konyvek)
    return <img src={loading} alt='Betöltés'/>
    
    return(
        <div className="container">
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Cím</th>
                        <th>Polc</th>
                    </tr>
                </thead>
                <tbody>
                    {konyvek.map(konyv =>(
                        <tr key={konyv.id}>
                            <td>{konyv.cim}</td>
                            <td>{konyv.polc}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}


export default App

import { useEffect, useState } from 'react'
import axios from 'axios'
import './Genrelist.css'

const Genrelist = () => {

    const [result, setResult] = useState([])

    useEffect(() => {
        document.title = `List of Anime Genres`
        axios.get('http://localhost:5000/genrelist')
            .then(function (res) {
                setResult(res.data.list)
            })
    }, [])

    return (
        <div className="genre">
            {result.map(res => <div className="genrelist" onClick={() => window.location.href = `/genre/${res}/1`}>{res}</div>)}
        </div>
    )
}

export default Genrelist

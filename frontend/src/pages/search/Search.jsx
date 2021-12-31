import './Search.css'

import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import HeroHeader from '../../components/heroheader/HeroHeader'
import Card from '../../components/card/Card'


const Search = () => {

    const [result, setResult] = useState([])
    const { term, page } = useParams()

    useEffect(() => {
        document.title = `Search results for ${term}`
        axios.get(`http://localhost:5000/search/${term}/${page}`)
            .then(function (res) {
                setResult(res.data.results)
            })
    }, [])

    function test() {
        page = page - 1
        window.location.reload()
    }

    return (
        <div className="search">
            <HeroHeader
                title={`Search results for ${term}`}
                onClickRight={() => window.location.href = `/search/${term}/${page - -1}`}
                onClickLeft={() => page > 1 ? window.location.href = `/search/${term}/${page - 1}` : null}
            />
            <div className="cards">
                {result.map(res => <Card image={res.image} title={res.title} onClick={`/watch/${res.id}/1`} />)}
            </div>
        </div>
    )
}

export default Search

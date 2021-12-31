import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import Card from '../../components/card/Card'
import HeroHeader from '../../components/heroheader/HeroHeader'

const Popular = () => {

    const [result, setResult] = useState([])
    const { page } = useParams()

    useEffect(() => {
        document.title = "Free Popular Anime"
        axios.get(`http://localhost:5000/popular/${page}`)
            .then(function (res) {
                setResult(res.data.results)
            })
    }, [])

    return (
        <div className="popular">
            <HeroHeader
                title="Popular"
                onClickRight={() => window.location.href = `/popular/${page - -1}`}
                onClickLeft={() => page > 1 ? window.location.href = `/popular/${page - 1}` : null}
            />
            <div className="cards">
                {result.map(res => <Card image={res.image} title={res.title} onClick={`/watch/${res.id}/1`} />)}
            </div>
        </div>
    )
}

export default Popular

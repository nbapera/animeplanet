import axios from 'axios'
import { useEffect, useState } from 'react'
import HeroHeader from '../../components/heroheader/HeroHeader'
import Card from '../../components/card/Card'

const Home = () => {

    const [result, setResult] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        document.title = `Animeplanet - Home`
        axios.get(`http://localhost:5000/recentlyadded/${page}`)
            .then(function (res) {
                setResult(res.data.results)
            })
    }, [page])

    return (
        <div className="home">
            <HeroHeader
                title="Recently added"
                onClickRight={() => setPage(page + 1)}
                onClickLeft={() => page > 0 ? setPage(page - 1) : null}
            />
            <div className="cards">
                {result.map(res => <Card onClick={`/watch/${res.id}/${res.episodeNumber}`} image={res.image} title={res.title} />)}
            </div>
        </div>
    )
}

export default Home

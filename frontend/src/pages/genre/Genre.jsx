import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import Card from "../../components/card/Card"
import HeroHeader from "../../components/heroheader/HeroHeader"

const Genre = () => {

    const [result, setResult] = useState([])
    const { type, page } = useParams()

    useEffect(() => {
        document.title = `Watch ${type} Anime Online`
        axios.get(`http://localhost:5000/genre/${type}/${page}`)
            .then(function (res) {
                setResult(res.data.results)
            })
    }, [])

    return (
        <div>
            <HeroHeader
                title={type}
                onClickRight={() => window.location.href = `/genre/${type}/${page - -1}`}
                onClickLeft={() => page > 1 ? window.location.href = `/genre/${type}/${page - 1}` : null}
            />
            <div className="cards">
                {result.map(res => <Card title={res.title} image={res.image} onClick={`/watch/${res.id}/1`} />)}
            </div>
        </div>
    )
}
export default Genre


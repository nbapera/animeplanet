import './Watch.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import VideoPlayer from '../../components/videoplayer/VideoPlayer'


const Watch = () => {

    const [result, setResult] = useState([])
    const [url, setUrl] = useState("")
    const { id, episode } = useParams()

    const Episodes = (props) => {

        const epList = () => {
            let l = []
            for (let i = 0; i < props.result.totalEpisode; i++) {
                l[i] = i + 1;;
            }
            return l;
        }

        return (
            <div>
                <div className="episodes-text">Episodes</div>
                <div className="episodes">
                    {epList().map(res => <button className="pick-episode" onClick={() => window.location.href = `/watch/${id}/${res}`}>{res}</button>)}
                </div>
            </div>
        )
    }

    const OverView = (props) => {
        return (
            <div className="overview">
                <img className="anime-image" src={props.result.image} alt=""></img>
                <div className="anime-info">
                    <h1 className="anime-title">{props.result.title}</h1>
                    <div className="anime-summary">{props.result.summary}</div>
                    <div className="anime-infor">Type: <span>{props.result.type}</span></div>
                    <div className="anime-infor">Released: <span>{props.result.released}</span></div>
                    <div className="anime-infor">Status: <span>{props.result.status}</span></div>
                    <div className="anime-infor">Genres: <span>{props.result.genres}</span></div>
                </div>
            </div >
        )
    }

    useEffect(() => {
        document.title = `Watch ${result.title} | ${episode}`
        axios.get(`http://localhost:5000/details/${id}`)
            .then(function (res) {
                setResult(res.data.results[0])
            })
        axios.get(`http://localhost:5000/watch/${id}/${episode}`)
            .then(function (res) {
                setUrl(res.data.link)
            })
    }, [result.title])

    return (
        <div className="watch">
            <OverView result={result} />
            <div className="ep-number">Episode: <span>{episode}</span></div>
            <VideoPlayer url={url} />
            <Episodes result={result} />
        </div>
    )
}

export default Watch

import './HeroHeader.css'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const HeroHeader = (props) => {
    return (
        <div className="hero-header">
            <div className="search-res">{props.title}</div>
            <div>
                <button className="page-button" onClick={props.onClickLeft}><FaArrowLeft /></button>
                <button className="page-button" onClick={props.onClickRight}><FaArrowRight /></button>
            </div>
        </div>
    )
}

export default HeroHeader

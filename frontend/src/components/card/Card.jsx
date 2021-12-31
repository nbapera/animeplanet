import './Card.css'
import { motion } from 'framer-motion'

const Card = (props) => {

    return (
        <motion.a
            className="card"
            href={props.onClick}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
        >
            <img className="card-image" src={props.image} alt=""></img>
            <div className="card-title" >{props.title}</div>
        </motion.a >
    )
}
export default Card
import logo from './logo.png'
import './Logo.css'

const Logo = () => {

    return (
        <div
            className="logo-container"
            onClick={() => window.location.href = '/'}
        >
            <img src={logo} alt=""></img>
            <div className="logo-text">anime<span>planet</span>.</div>
        </div >
    )
}

export default Logo

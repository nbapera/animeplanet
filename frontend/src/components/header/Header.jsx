import { motion } from 'framer-motion'
import { useState } from 'react'
import Logo from '../logo/Logo'
import { FaSearch } from 'react-icons/fa'
import './Header.css'

const Header = () => {

    const [search, setSearch] = useState("")

    const handleSearch = e => {
        setSearch(e.target.value)
    }

    const sendSearch = () => {
        if (!search || typeof search !== 'string') {
            return
        }
        if (search.length < 2) {
            return
        }
        window.location.href = `/search/${search}/1`
        setSearch("")
    }

    const handleSubmit = e => {
        e.preventDefault()
        sendSearch()
    }

    return (
        <div>
            <header>
                <div className="header-logo">
                    <Logo />
                    <ul>
                        <li><a href="/popular/1">Popular</a></li>
                        <li><a href="/genrelist">Genre</a></li>
                    </ul>
                </div>
                <form onSubmit={e => handleSubmit(e)} className="header-input">
                    <motion.input
                        placeholder="Search titles..."
                        className="header-search"
                        onChange={handleSearch}
                        value={search}
                        whileFocus={{ width: 450 }}
                    ></motion.input>
                    <FaSearch className="header-icon" onClick={() => sendSearch()} />
                </form>
            </header >
        </div>
    )
}

export default Header

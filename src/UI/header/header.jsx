import React from 'react'
import bigHeader from './Big_header.module.scss'
import MinHeader from './Min_header.module.scss'
import { Link } from 'react-router-dom'


const Min_header = () => {
    return (
        <header className={MinHeader.header_Min}>
            <div className={MinHeader.headerEL}>
                <Link className={MinHeader.about} to={'/about'}>Обо мне</Link>
                <Link className={MinHeader.projects} to={'/'}>Проекты</Link>
            </div>
        </header>

    )
}
const Big_header = () => {
    return (
        <header className={bigHeader.header_Big}>
            <div className={bigHeader.headerEL}>
                <Link className={bigHeader.link} to={'/about'}>Обо мне<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m304-82-56-57 343-343-343-343 56-57 400 400L304-82Z" /></svg></Link>
                <div className={bigHeader.imgBG}>
                    <img src="/logo/leviathan.png" alt="img" />
                </div>
                <Link className={bigHeader.link} to={'/'}><svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m304-82-56-57 343-343-343-343 56-57 400 400L304-82Z" /></svg>Проекты</Link>
            </div>
        </header>
    )
}



const Header = () => {
    return (
        <>
            {window.innerWidth < 1024 ? <Min_header /> : <Big_header />}
        </>
    )
}

export default Header
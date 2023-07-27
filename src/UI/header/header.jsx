import React from 'react'
import style from './big_header.module.scss'
import { Link } from 'react-router-dom'


const MinHeader = () => {
    return (
        <></>
    )
}
const Bigheader = () => {
    return (
        <div className={style.headerEL}>
            <Link className={style.link}>О себе<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m304-82-56-57 343-343-343-343 56-57 400 400L304-82Z" /></svg></Link>
            <div className={style.imgBG}>
                <img src="/logo/leviathan.png" alt="img" />
            </div>
            <Link className={style.link}><svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m304-82-56-57 343-343-343-343 56-57 400 400L304-82Z" /></svg>Проекты</Link>
        </div>
    )
}



const Header = () => {
    return (
        <header className={style.header}>
            {window.innerWidth < 1024? <MinHeader />: <Bigheader />}
        </header>
    )
}

export default Header
import CardsPage from '../../page/cards/CardsPage'
import ForArtem from '../../page/forArtem/forArtem'
import About from '../../page/about/about'
import style from './mainPage.module.scss'
import { Routes, Route } from 'react-router-dom'

const Main = () => {
    return (
        <div className={style.conteiner}>
            <Routes>
                <Route path="/" element={<CardsPage />} />
                <Route path="/forArtem" element={<ForArtem />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    )
}

export default Main
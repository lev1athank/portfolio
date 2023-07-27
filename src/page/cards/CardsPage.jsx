import React from 'react'
import style from './cards.module.scss'
import Card from '../../module/card/card'
import cardsList from '../../infa/cardsList.json'
import ForArtem from '../forArtem/forArtem'
import { Routes, Route } from 'react-router-dom'

const Cards = () => {
    return (
    <div className={style.cards}>
        {cardsList.map((infa, index) => <Card infa={infa} index={index} key={index} />)}
    </div>
    )
}

const CardsPage = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Cards />} />
                <Route path="/forArtem" element={<ForArtem />} />
            </Routes>
        </>
    )
}

export default CardsPage
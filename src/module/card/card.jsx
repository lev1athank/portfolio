import React from 'react'
import style from './card.module.scss'
import { Link } from 'react-router-dom'
const Card = ({ infa, index }) => {
  console.log(((index + 1) * 0.25));
  return (
    <Link className={style.card} to={infa.url} style={{ animationDelay: ((index + 1) * 0.15) + "s" }}>
      <img src={"/img/" + infa.nameImage} alt="img" />
      <span className={style.cardName}>{infa.namePage}</span>
      <div className={style.description}>{infa.description}</div>
    </Link>

  )
}

export default Card
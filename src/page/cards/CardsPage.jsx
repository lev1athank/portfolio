import Card from '../../module/card/card'
import cardsList from '../../infa/cardsList.json'
import style from './cards.module.scss'


const CardsPage = () => {
    return (
        <div className={style.cards}>
            {cardsList.map((infa, index) => <Card infa={infa} index={index} key={index} />)}
        </div>
    )
}

export default CardsPage
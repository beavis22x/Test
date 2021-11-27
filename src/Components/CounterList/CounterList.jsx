import React, {useEffect} from 'react';
import s from './CounterList.module.css';
import Item from '../CounterItem/CounterItem';

const CounterList = ({counters, setScoreboard, ...props}) => {

     let id = 0, // Ключ для мапа
         score = 0; // Сумма значений всех счетчиков

    useEffect(() => {
        const setScore = () => {
            const amountCounters = counters.length;
            setScoreboard(amountCounters, score)// callback
        }
        setScore();
    },[counters, score]);

    const itemsList = counters.map((n) => {
        score += n.amount;// при каждой итерации суммируется значение
        return <Item key={++id}
                     id={n.id}
                     amount={n.amount}
                     {...props}/>
    });

    return (
        <div className={s.content}>
            {itemsList}
        </div>
    )
}

export default CounterList
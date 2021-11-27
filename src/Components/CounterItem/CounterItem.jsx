import React from 'react';
import s from './CounterItem.module.css';

const Item = ({id, amount, ...props}) => {

    // const getId = (e, callback) => {
    //     const id = Number(e.currentTarget.id); //не работает(
    //     props.callback(id);
    // }

    const decrement = (e) => {
        const id = Number(e.currentTarget.id);
        props.decrement(id);
    }

    const resetCounter = (e) => {
        const id = Number(e.currentTarget.id);
        props.resetCounter(id);
    }

    const increment = (e) => {
        const id = Number(e.currentTarget.id);
        props.increment(id);
    }

    const deleteCounter = (e) => {
        const id = Number(e.currentTarget.id);
        props.deleteCounter(id);
    }

    return (
        <div className={s.counter__list__wrapper}>
            <div className={s.counter__item}
                 id={id}>
                <div className={s.current__counter}>
                    <span id={s.value}>{amount}</span>
                </div>
                <div className={s.counter__item__buttons}>
                    <div className={s.buttons__wrapper}>
                        <button className={s.btn__decrement}
                                onClick={decrement}
                                id={id}>
                            -
                        </button>
                        <button className={s.btn__reset}
                                onClick={resetCounter}
                                id={id}>
                            Reset
                        </button>
                        <button className={s.btn__delete}
                                onClick={deleteCounter}
                                id={id}>
                            Del
                        </button>
                        <button className={s.btn__increment}
                                onClick={increment}
                                id={id}>
                            +
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item;
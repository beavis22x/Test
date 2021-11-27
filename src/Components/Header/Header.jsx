import React from 'react';
import s from './Header.module.css';

const Header  = ({amountCounters, score, ...props}) => {
    return (
        <header className={s.app__header}>
            <div className={s.header__buttons}>
                <button className={s.header__add__btn}
                        onClick={props.addNewCounter}>
                    Add count.
                </button>
                <button className={s.header__reset__btn}
                        onClick={props.deleteAllCounters}>
                    Reset
                </button>
            </div>
            <div className={s.header__score}>
                <div className={s.amount__counters}>
                    <span>Количество счетчиков <br/> {amountCounters}</span>
                </div>
                <div className={s.sum__score}>
                    <span>Сумма значений всех счетчиков <br/> {score}</span>
                </div>
            </div>
        </header>
    )
};

export default Header;
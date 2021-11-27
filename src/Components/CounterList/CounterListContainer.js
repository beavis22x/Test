import React from 'react';
import {connect} from 'react-redux';
import CounterList from './CounterList';
import appReducer, {deleteCounterAC, incrementAC, decrementAC, resetCounterAC, setScoreboardAC} from '../../redux/appReducer';

const mapStateToProps = (state) => {
    return {
        counters: state.appReducer.counters,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteCounter: (counterID) => {
            dispatch(deleteCounterAC(counterID))
        },
        increment: (counterID) => {
            dispatch(incrementAC(counterID))
        },
        decrement: (counterID) => {
            dispatch(decrementAC(counterID))
        },
        resetCounter: (counterID) => {
            dispatch(resetCounterAC(counterID))
        },
        setScoreboard: (amountCounters, score) => {
            dispatch(setScoreboardAC(amountCounters, score))
        }
    }
};

const CounterListContainer = connect (mapStateToProps, mapDispatchToProps) (CounterList);

export default CounterListContainer;
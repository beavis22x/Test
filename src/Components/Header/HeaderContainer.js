import React from 'react';
import {connect} from 'react-redux';
import appReducer, {deleteAllCountersAC, addNewCounterAC} from '../../redux/appReducer';
import Header from './Header';

const mapStateToProps = (state) => {
    return {
        amountCounters: state.appReducer.amountCounters,
        score: state.appReducer.score,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteAllCounters: () => {
            dispatch(deleteAllCountersAC())
        },
        addNewCounter: () => {
            dispatch(addNewCounterAC())
        }
    }
};

const HeaderContainer = connect (mapStateToProps, mapDispatchToProps) (Header);

export default HeaderContainer;
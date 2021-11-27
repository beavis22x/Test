const ADD_NEW_AND_EVEN_INC_COUNTER = 'ADD_NEW_AND_EVEN_INC_COUNTER';
const DECREMENT = 'DECREMENT';
const INCREMENT = 'INCREMENT';
const RESET_COUNTER = 'RESET_COUNTER';
const SET_SCOREBOARD = 'SET_SCOREBOARD';
const DELETE_AND_ODD_DEC_COUNTER = 'DELETE_AND_ODD_DEC_COUNTER';
const DELETE_ALL_COUNTERS = 'DELETE_ALL_COUNTERS';

let id = 4;

let initialState = {
    counters: [
        {id: 0, amount: 2},
        {id: 1, amount: 0},
        {id: 2, amount: 4},
        {id: 3, amount: 7}
    ],
    amountCounters: 0,
    score: 0
};

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_NEW_AND_EVEN_INC_COUNTER: {
            id++;
            const newCounter = {
                id: id,
                amount: 0
            }
            return { //сначала проходимся по массиву прибавляя четным по 1, после в конец массива добавляем новый счетчик
                ...state,
                counters: [...state.counters.map(counter => {
                    if (counter.amount % 2 === 0) {
                        return {...counter, amount: ++counter.amount}
                    }
                    return counter
                }), newCounter]
            };
        }
        case INCREMENT: {
            return {//Проходим по массиву объектов, если айди объекта и айди из экшена совпадают делаем его копию и увеличиваем на единицу
                ...state,
                counters: state.counters.map((counter) => {
                    if (counter.id === action.counterId) {
                        return {...counter, amount: ++counter.amount}
                    }
                    return counter
                })
            };
        }
        case RESET_COUNTER: {
            return {// Проходим по массиву объектов, если айди объекта и айди из экшена совпадают делаем его копию и обнуляем на единицу
                ...state,
                counters: state.counters.map((counter) => {
                    if (counter.id === action.counterId) {
                        return {...counter, amount: 0}
                    }
                    return counter
                })
            };
        }
        case DECREMENT: {
            const index = state.counters.findIndex(elem => elem.id === action.counterId);
            return {// Проходим по массиву объектов, если айди объектаи айди из экшена совпадают делаем его копию и уменьшаем на единицу
                ...state,
                counters: state.counters.map((counter) => {
                    if (counter.id === action.counterId && state.counters[index].amount >= 1) {
                        return {...counter, amount: --counter.amount}
                    }
                    return counter
                })
            };

        }
        case DELETE_AND_ODD_DEC_COUNTER: {
            const index = state.counters.findIndex(elem => elem.id === action.counterId);
            return {//Удаляем счетчик с id = index (создаем и объединяем два массива).Проходим по списку объектов ловим нечетные && amount >= 1 отнимаем единицу.
                ...state,
                counters: [...state.counters.slice(0, index),//
                    ...state.counters.slice(index + 1)].map((counter) => {
                    if (counter.amount % 2 !== 0 && counter.amount >= 1) {
                        return {...counter, amount: --counter.amount}
                    }
                    return counter
                })
            };
        }
        case DELETE_ALL_COUNTERS: {
            return {
                ...state,
                counters: []
            };
        }
        case SET_SCOREBOARD: {
            return {
                ...state,
                amountCounters: action.amountCounters,
                score: action.score
            };
        }
        default:
            return state;
    }
}

export const addNewCounterAC = () => ({type: ADD_NEW_AND_EVEN_INC_COUNTER});
export const incrementAC = (counterId) => ({type: INCREMENT, counterId})
export const decrementAC = (counterId) => ({type: DECREMENT, counterId})
export const resetCounterAC = (counterId) => ({type: RESET_COUNTER, counterId})
export const setScoreboardAC = (amountCounters, score) => ({type: SET_SCOREBOARD, amountCounters, score})
export const deleteAllCountersAC = () => ({type: DELETE_ALL_COUNTERS});
export const deleteCounterAC = (counterId) => ({type: DELETE_AND_ODD_DEC_COUNTER, counterId});

export default appReducer;

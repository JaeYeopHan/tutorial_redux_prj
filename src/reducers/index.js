import * as types from '../actions/ActionTypes';
import { Map, List } from 'immutable';

const initialState = Map({
    counters: List([
        Map({
            color: 'black',
            number: 0
        })
    ])
});
function counter(state = initialState, action) {
    const counters = state.get('counters');

    switch(action.type) {
        case types.CREATE:
            return state.set('counters', counters.push(Map({
                color: action.color,
                number: 0
            })));

        case types.REMOVE:
            return state.set('counters', counters.pop());

        case types.INCREMENT:
            return state.set('counters', counters.update(
                action.index,
                (counter) => counter.set('number', counter.get('number') + 1)
            ));

        case types.DECREMENT:
            return state.set('counters', counters.update(
                action.index,
                (counter) => counter.set('number', counter.get('number') - 1))
            );

        case types.SET_COLOR:
            return state.set('counters', counters.update(
                action.index,
                (counter) => counter.set('color', action.color))
            );

        default:
            return state;
    }
}

// const initialState = {
//     counters: [
//         {
//             color: 'black',
//             number: 0
//         }
//     ]
// };
// function counter(state = initialState, action) {
//     const { counters } = state;
//
//     switch(action.type) {
//         case types.CREATE:
//             return {
//                 counters: [
//                     ...counters,
//                     {
//                         color: action.color,
//                         number: 0
//                     }
//                 ]
//             };
//
//         case types.REMOVE:
//             return {
//                 counters: counters.slice(0, counters.length - 1)
//             };
//
//         case types.INCREMENT:
//             return {
//                 counters: [
//                     ...counters.slice(0, action.index),
//                     {
//                         ...counters[action.index],
//                         number: counters[action.index].number + 1
//                     },
//                     ...counters.slice(action.index + 1, counters.length)
//                 ]
//             };
//
//         case types.DECREMENT:
//             return {
//                 counters: [
//                     ...counters.slice(0, action.index),
//                     {
//                         ...counters[action.index],
//                         number: counters[action.index].number - 1
//                     },
//                     ...counters.slice(action.index + 1, counters.length)
//                 ]
//             };
//
//         case types.SET_COLOR:
//             return {
//                 counters: [
//                     ...counters.slice(0, action.index),
//                     {
//                         ...counters[action.index],
//                         color: action.color
//                     },
//                     ...counters.slice(action.index + 1, counters.length)
//                 ]
//             };
//
//         default:
//             return state;
//     }
// }
//
export default counter;

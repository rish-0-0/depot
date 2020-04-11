import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { colored } from '../helpers';
import Reducer from '../redux';

const logger = (store) => (next) => (action) => {
    colored('red', "Dispatching Action: \n");
    const result = next(action);
    colored('cyan', JSON.stringify(action, null, 4));
    colored('green', "Next State:\n");
    console.log(JSON.stringify(store.getState(), null, 4));
    return result;
};

export default applyMiddleware(thunk, logger)(createStore)(Reducer);


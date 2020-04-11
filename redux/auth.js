

import { authActions } from './actions';

const initState = {
    loading: false,
};
export default function (state=initState, action) {
    switch(action.type) {
        default:
            return initState;
    }
}
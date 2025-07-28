import { createStore } from "redux";

const xyz = {
    name: ""
}

function reducer(state = xyz, action) {
    switch (action.type) {
        case msg:
            return {
                name: "utsav"
            }
            break;

        default:
            return state
            break;
    }
}

const Store = createStore(reducer)


export default Store
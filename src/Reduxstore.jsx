import { createStore } from "redux";

const xyz = {
    name: ""
}

function reducer(state = xyz, action) {
    switch (action.type) {
        case "msg":
            return {
                name: "Skywin"
            }
            break;

        default:
            return state
            break;
    }
}

const Reduxstore = createStore(reducer)


export default Reduxstore

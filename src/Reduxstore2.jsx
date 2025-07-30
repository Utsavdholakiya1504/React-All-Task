import { createStore } from "redux"

const abc = {
    loading: false,
    data: null,
    error: null,
}

function reducer(state = abc, action) {
    switch (action.type) {

    }
}

function Fetchdata() {

}


const Reduxstore2 = createStore(reducer)

export { Reduxstore2, Fetchdata }
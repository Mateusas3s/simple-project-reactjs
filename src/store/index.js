import { createStore } from "redux"
import reducers from "../reducers"

const devTools = window.__REDUX_DEVTOOLS_EXTENTION__ && window.__REDUX_DEVTOOLS_EXTENTION__()
const store = createStore(reducers, devTools)

export default store

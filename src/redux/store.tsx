import { combineReducers, createStore, applyMiddleware } from "redux";
import tableReduser from "./table-reduser"
import thunkMiddleware from "redux-thunk"

let redusers = combineReducers({
    table: tableReduser,
})

type RedusersType = typeof redusers
export type AppStateType = ReturnType<RedusersType>

let store = createStore(redusers, applyMiddleware(thunkMiddleware));

export default store;
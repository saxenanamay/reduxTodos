import { createStore } from "redux";
import todoReducer from "./reducers/todoReducer";
const state={
    todos: [
        'how are you',
        'i am fine',
        'just testing'
    ]
}
const store = createStore(todoReducer, state);
export default store;
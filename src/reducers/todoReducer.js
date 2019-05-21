import {ADD_TODO} from '../actions/addTodo';
import {REMOVE_TODO} from '../actions/removeTodo';
const todoReducer= (state,action)=>{
    switch(action.type){
        case ADD_TODO:
            return Object.assign({},state,{todos: [...state.todos,action.todo]});
        case REMOVE_TODO:
            var index= Number(action.index);
            var newArr= [...state.todos.slice(0,index),...state.todos.slice(index+1)];
            return {todos: newArr};
        default: return state;
    }
}
export default todoReducer;
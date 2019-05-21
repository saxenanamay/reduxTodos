import React from 'react';
import axios from 'axios';
import Topbar from './topbar';
import store from "../store";
import { addTodo } from "../actions/addTodo";
import { removeTodo } from "../actions/removeTodo";

class ListContainer extends React.Component{
    constructor(props){
        super(props);
    }
    getTodos = async () =>{
        try {
            return await axios.get("https://dog.ceo/api/breeds/list/all")
        } catch (error) {
            console.error(error)
        }
    }
      
    updateTodos = async () => {
        const todos = await this.getTodos();

        if(todos.data) {
            const list = Object.keys(todos.data.message);
            list.forEach((e)=>store.dispatch(addTodo(e)));
        }
    }
    componentWillMount(){
        this.updateTodos();
    }
    componentDidMount(){
        // store.subscribe(()=>console.log(store.getState()));
    }
    
    handleChange(e){
        if(e.key==='Enter'){
            store.dispatch(addTodo(e.target.value));
            e.target.value= '';
        }
    }
    handleDeleteClick=(e)=>{
        store.dispatch(removeTodo(e.target.id));
    }
    render(){
        return(
            <div className="todosContainer">
                <Topbar/>
                <input type="text" id="new" placeholder="Add new To-Do" onKeyPress={this.handleChange}/>
                <ul>
                    {this.props.todos.map((item,idx)=><li key={idx} className="todo-item"><span  id={idx} className="delete" onClick={this.handleDeleteClick}></span>{item}</li>)}
                </ul>
            </div>
        );
    };
}

export default ListContainer;
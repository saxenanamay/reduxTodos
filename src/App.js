import React from 'react';
import ListContainer from './components/listcontainer';
import { connect } from "react-redux";
import { addTodo } from "./actions/addTodo";
import { removeTodo } from "./actions/removeTodo";
import axios from 'axios';

class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(<ListContainer todos={this.props.todos}/>);
    }
}
const mapStateToProps = state => ({
    todos: state.todos
});
const mapDispatchToProps = dispatch => ({
    addTodo: () => dispatch(addTodo),
    removeTodo: () => dispatch(removeTodo)
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
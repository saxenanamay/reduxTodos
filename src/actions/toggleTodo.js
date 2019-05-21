const TOGGLE_TODO= 'TOGGLE_TODO';

export function toggleTodo(index) {
    return { 
        type: TOGGLE_TODO, 
        index 
    }
}
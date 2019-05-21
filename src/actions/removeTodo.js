export const REMOVE_TODO= 'REMOVE_TODO';

export function removeTodo(index) {
    return { 
        type: REMOVE_TODO, 
        index 
    }
}
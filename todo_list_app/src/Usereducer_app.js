import React, { useReducer } from 'react'

const initialState = {
    todos: [],
};

function reducer(state, action) {
    switch (action.type) {
        case 'add_todo':
            return {
                ...state,
                todos: [...state.todos, { id: Date.now(), text: action.payload, completed: false }],
            };
        case 'toggle_todo':
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
                ),
            };
        case 'delete_todo':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload),
            };
        default:
            return state;
    }
}

function Usereducer_app() {

    const [state, dispatch] = useReducer(reducer, initialState);
    const [text, setText] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'add_todo', payload: text });
        setText('');
    };

    return (
        <div>UseReducer APP
                <div className="App">
                    <h1>ToDo List</h1>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder="Add new todo"
                        />
                        <button type="submit">Add Todo</button>
                    </form>
                    <ul>
                        {state.todos.map(todo => (
                            <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                                {todo.text}
                                <button onClick={() => dispatch({ type: 'toggle_todo', payload: todo.id })}>
                                    Toggle
                                </button>
                                <button onClick={() => dispatch({ type: 'delete_todo', payload: todo.id })}>
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
        </div>
    )
}

export default Usereducer_app
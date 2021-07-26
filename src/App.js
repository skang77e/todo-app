import React, {useReducer, useRef, useCallback} from 'react';
import TodoTemplate from './componenets/TodoTemplate';
import TodoInsert from './componenets/TodoInsert';
import TodoList from './componenets/TodoList';

function createBulk(){
  const array=[];

  for(let i=1; i < 2500; i++){
    array.push({
      id:i,
      text:'Todo' + i,
      checked: false,

    });
  }
  return array;
}

function todoReducer(todos, action){
  switch(action.type){
    case 'INSERT':
      return todos.concat(action.todo);
    case 'REMOVE':
      return todos.filter(todo => todo.id !== action.id);
    case 'TOGGLE':
      return todos.map(todo => todo.id === action.id ? {...todo, checked: !todo.checked} : todo);
    default:
      return todos;
  }
}

const App = () => {

  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulk);

  const nextId = useRef(2501);
  const addToList = useCallback(text => {
    const todo = {
      id:nextId.current,
      text,
      checked: false
    };
    dispatch({type:'INSERT', todo});
    nextId.current=+1;
  },[]);

  const toggleCheckbox = useCallback(id =>{
    dispatch({type:'TOGGLE', id})
  },[]);
  // const addToList = useCallback(text => {
  //   const todo = {
  //     text,
  //     checked: false
  //   };
  //   setTodos(todos.concat(todo));
  // },[todos]);

  const removeFromList = useCallback(id => {
    dispatch({type:'REMOVE', id});
  },[],);

  return (
    <div>
      <TodoTemplate>
        <TodoInsert onInsert={addToList}/>
        <TodoList todos={todos} onRemove={removeFromList} onToggle={toggleCheckbox}/>
      </TodoTemplate>
    </div>
  );
}

export default App;

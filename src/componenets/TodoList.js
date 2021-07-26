import React from 'react'
import TodoListItem from './TodoListItem'
import styled from 'styled-components'

const TodoList = ({todos, onRemove, onToggle}) => {
    return (
        <TodoListContainer>
            {todos.map((todo) => <TodoListItem todo={todo} key={todo.id} onToggle={onToggle} onRemove={onRemove}/>
            )}
        </TodoListContainer>
    )
}

const TodoListContainer = styled.div`
    min-height:320px;
    max-height:513px;
    overflow-y:auto;
`
export default React.memo(TodoList)
